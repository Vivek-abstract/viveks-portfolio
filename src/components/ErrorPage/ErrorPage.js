import './ErrorPage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="error-container d-flex justify-content-center align-items-center align-content-center text-center">
            <h1 className="error-title">Oops!</h1>
            <p className="error-message">You are lost, traveller. Head back <Link to="/" className='purple-link'>home</Link></p>
        </div>
    );
}