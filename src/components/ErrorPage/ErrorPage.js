import './ErrorPage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="error-container d-flex justify-content-center align-items-center align-content-center">
            <h1 className="error-title text-center">Oops!</h1>
            <p className="error-message">You are lost, traveller. Head back <Link to="/">home</Link></p>
        </div>
    );
}