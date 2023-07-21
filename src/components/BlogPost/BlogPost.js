import { useLoaderData } from "react-router-dom";
import './BlogPost.css';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import * as contentful from 'contentful';

export async function loader({ params }) {

    var client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_READ_API_KEY,
    });

    var allPosts = []
    const posts = await client
        .getEntries({
            content_type: 'blogPost',
        })

    posts.items.forEach(function (post) {
        allPosts.push({
            id: post.fields.id,
            title: post.fields.title,
            img: post.fields.image.fields.file.url,
            preview: post.fields.preview,
            content: post.fields.content
        })
    });
    const currPost = allPosts.find(p => p.id == params.id);
    return currPost;
}

export default function BlogPost() {

    const post = useLoaderData();
    const contentHtml = documentToHtmlString(post.content);

    return (
        <div>
            <div className="container mt-5 d-flex post-container">
                <img className="img-fluid mb-4" src={post.img} alt="Blog hero image" />
                <h1 className="post-title mb-4">{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
            <hr />
        </div>
    );
}