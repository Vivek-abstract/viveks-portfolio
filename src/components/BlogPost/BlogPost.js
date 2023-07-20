import { useLoaderData } from "react-router-dom";
import './BlogPost.css';

const blogPosts = [
    {
        id: 1,
        title: 'Soaring through the clouds',
        img: 'https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga deleniti alias iste qui perspiciatis nisi nam ipsam voluptatem! Velit.'
    },
    {
        id: 2,
        title: 'The quick brown fox jumps over the lazy dog',
        img: 'https://images.unsplash.com/photo-1678874968498-20e305bafc1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga deleniti alias iste qui perspiciatis nisi nam ipsam voluptatem! Velit.'
    }
]

export async function loader({ params }) {
    const post = blogPosts.find(b => b.id == params.id);
    return post;
}

export default function BlogPost() {

    const post = useLoaderData();
    console.log(post);

    return (
        <div className="container mt-5 d-flex post-container">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.preview}</p>
        </div>
    );
}