import { Link, redirect, useLoaderData } from 'react-router-dom';
import './BlogPage.css';
import BlogDetails from '../BlogDetails/BlogDetails';
import * as contentful from 'contentful';
import { useEffect, useState } from 'react';

export async function postsLoader() {
    // Token is read only
    var client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_READ_API_KEY,
    });
    var allPosts = [];
    var posts = await client
        .getEntries({
            content_type: 'blogPost',
        });

    if (!posts || posts.length == 0) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

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
    return allPosts;
}

export default function BlogPage() {
    const posts = useLoaderData();

    return (
        <div>
            <div className="container mt-5 d-flex justify-content-between blog-container">
                <div className="heading-container"><h3 className='heading'>Latest Blog Posts</h3></div>
                {posts == null ?
                    <div className='d-flex justify-content-center spinner-container'>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    posts.map(post =>
                        <BlogDetails key={post.id} post={post} />
                    )
                }
            </div>
            <hr />
        </div>
    );
}