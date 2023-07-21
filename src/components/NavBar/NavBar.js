import './NavBar.css';
import { useRef } from 'react';
import { Link, NavLink, redirect } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function NavBar(props) {
    const navBtn = useRef(null);
    const toggleNavBar = () => {
        navBtn.current.click();
    }
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand me-auto" to="/"><h3 class="navbar-heading">Vivek Gawande</h3></Link>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    ref={navBtn}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={toggleNavBar} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={toggleNavBar} to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item last-margin">
                            <NavLink className="nav-link" onClick={toggleNavBar} to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}