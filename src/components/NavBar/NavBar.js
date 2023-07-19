import './NavBar.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";

export default function NavBar(props) {

    let navBarBtn = useRef(null);
    const executeScroll = () => {
        props.refProp.current.scrollIntoView();
        navBarBtn.current.click();
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand me-auto" href="/"><h3>Vivek Gawande</h3></a>
                <button className="navbar-toggler" type="button" ref={navBarBtn}
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" onClick={executeScroll}>Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item last-margin">
                            <a className="nav-link" href="/about">About Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}