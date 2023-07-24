import './Contact.css';
import resume from '../../assets/Vivek_Gawande_Resume.pdf';

export default function Contact() {

    return (
        <div className="container mt-5 d-flex justify-content-center contact-container">
            <div className="contact text-center mb-3"><h2 className='contact-text'>Contact</h2></div>
            <div className='d-flex mb-5'>
                <h5 className='me-5'><a className="link" target="_blank" href="https://github.com/Vivek-abstract">GitHub</a></h5>
                <h5 className='me-5'><a className="link"target="_blank" href="https://www.linkedin.com/in/vivekbgawande/">LinkedIn</a></h5>
                <h5 className='me-5'><a className="link"target="_blank" href="https://bit.ly/ViveksResume">Resume</a></h5>
            </div>
        </div>
    );
}