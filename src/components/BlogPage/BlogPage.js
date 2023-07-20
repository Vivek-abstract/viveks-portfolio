import { Link, redirect } from 'react-router-dom';
import './BlogPage.css';

export default function BlogPage() {
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

    return (
        <div>
            <div className="container mt-5 d-flex justify-content-between blog-container">
                <div className="heading-container"><h3 className='heading'>Latest Blog Posts</h3></div>

                {blogPosts.map(post =>
                    <div className='container d-flex mb-5 justify-content-between post-container' key={post.id}>
                        <Link to='/' className='blog-link'>
                            <img src={post.img}
                                alt="Blog image"
                                className="blog-image img-fluid" />
                        </Link>
                        <div className="blog-desc">
                            <Link to="/blog/1" className='blog-link'>
                                <h4 className='blog-title'>{post.title}</h4>
                                <p className="blog-preview">{post.preview}...</p>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
}