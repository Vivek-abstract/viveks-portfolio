import { useLoaderData } from "react-router-dom";
import './BlogPost.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as contentful from 'contentful';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

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
            content: post.fields.content,
            createdDate: post.fields.createdDate
        })
    });
    const currPost = allPosts.find(p => p.id == params.id);
    return currPost;
}

export default function BlogPost() {

    const post = useLoaderData();

    const renderOptions = {
        renderNode: {
            [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                // target the contentType of the EMBEDDED_ENTRY to display as you need
                if (node.data.target.sys.contentType.sys.id === "blogPost") {
                    return (
                        <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
                        </a>
                    );
                }
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                // target the contentType of the EMBEDDED_ENTRY to display as you need
                if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                    return (
                        <pre>
                            <code>{node.data.target.fields.code}</code>
                        </pre>
                    );
                }

                if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
                    return (
                        <iframe
                            src={node.data.target.fields.embedUrl}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            title={node.data.target.fields.title}
                            allowFullScreen={true}
                        />
                    );
                }
            },

            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                // render the EMBEDDED_ASSET as you need
                return (
                    <div className="d-flex justify-content-center content-image-container">
                        <img
                            src={`https://${node.data.target.fields.file.url}`}
                            height={node.data.target.fields.file.details.image.height}
                            width={node.data.target.fields.file.details.image.width}
                            alt={node.data.target.fields.description}
                            className="content-image img-fluid mt-3 mb-3 align-self-center"
                        /></div>
                );
            },
        },
    }

    const contentHtml = documentToReactComponents(post.content, renderOptions)
    return (
        <div>
            <div className="container mt-5 d-flex post-container">
                <img className="img-fluid mb-4" src={post.img} alt="Blog hero image" />
                <h1 className="post-title mb-4">{post.title}</h1>
                <p>{new Date(post.createdDate).toDateString()}</p>
                {contentHtml}
            </div>
            <hr />
        </div>
    );
}