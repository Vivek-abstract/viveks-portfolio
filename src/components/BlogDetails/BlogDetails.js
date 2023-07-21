import { Link } from "react-router-dom";
import './BlogDetails.css';

export default function BlogDetails(props) {
    return (
        <div className='container d-flex mb-5 justify-content-between details-container'>
            <Link to={`/blog/${props.post.id}`} className='blog-link'>
                <img src={props.post.img}
                    alt="Blog image"
                    className="blog-image img-fluid" />
            </Link>
            <div className="blog-desc">
                <Link to={`/blog/${props.post.id}`} className='blog-link'>
                    <h4 className='blog-title'>{props.post.title}</h4>
                    <p className="blog-preview">{props.post.preview}...</p>
                </Link>
            </div>
        </div>
    );
}