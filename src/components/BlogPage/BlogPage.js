import { Link, redirect } from 'react-router-dom';
import './BlogPage.css';
import BlogDetails from '../BlogDetails/BlogDetails';
import * as contentful from 'contentful';
import { useEffect, useState } from 'react';

export default function BlogPage() {
    var [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        // Token is read only
        var client = contentful.createClient({
            space: process.env.REACT_APP_CONTENTFUL_SPACE,
            accessToken: process.env.REACT_APP_CONTENTFUL_READ_API_KEY,
        });
        var allPosts = [];
        client
            .getEntries({
                content_type: 'blogPost',
            })
            .then(function (posts) {
                console.log(posts);
                posts.items.forEach(function (post) {
                    allPosts.push({
                        id: post.fields.id,
                        title: post.fields.title,
                        img: post.fields.image.fields.file.url,
                        preview: post.fields.preview,
                        content: post.fields.content,
                        createdDate: new Date(post.fields.createdDate)
                    })
                });
                allPosts = allPosts.sort((post1, post2) => post2.createdDate - post1.createdDate);
                setPosts(allPosts);
            });
    }

    useEffect(() => fetchPosts, []);

    return (
        <div>
            <div className="container mt-5 d-flex justify-content-between blog-container">
                <div className="heading-container"><h3 className='heading'>Latest Blog Posts</h3></div>
                {posts.length > 0 && posts.map(post =>
                    <BlogDetails key={post.id} post={post} />
                )}
            </div>
            <hr />
        </div>
    );
}