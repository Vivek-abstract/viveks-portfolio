import './WorkSample.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function WorkSample({ title, oneLiner, description, link, image1, image2, titleColor }) {
    return (
        <div className="container mt-5 d-flex work-container">
            <div className="product-intro-container">
                <h2 className="product-title" style={{ color: titleColor }}>{title}</h2>
                <span className="product-one-liner">{oneLiner}</span>
            </div>
            <div className="product-description-container">
                <p className='product-description'>{description}</p>
                {
                    link && <a className="btn" target="_blank" href={link}>
                        View Project<FontAwesomeIcon icon={faArrowRight} />
                    </a>
                }
            </div>
            <div className='product-image-container d-flex justify-content-center'>
                <img className="product-image img-fluid" src={image1} alt="Screenshot 1" />
                <img className="product-image img-fluid" src={image2} alt="Screenshot 2" />
            </div>
        </div>
    );
}