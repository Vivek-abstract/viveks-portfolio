import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import './About.css';

export default function About() {
    return (
        <div>
            <NavBar />
            <div className="container mt-5 d-flex justify-content-between">
                <div className="about-description-container">
                    <h1>About Me</h1>
                    <p>I'm Vivek, a software developer with 4 years of experience in developing web and mobile applications.
                        I have a passion for learning new things about tech everyday.
                    </p>
                    <p class="mt-4">My go to technologies are .NET, Angular, React and SQL.
                    </p>
                </div>
                <div className="about-hobbies-container">
                    <h3>My interests</h3>
                    <ul>
                        <li className="list-item">Chess</li>
                        <li className="list-item">Movies</li>
                        <li className="list-item">Music</li>
                    </ul>
                </div>
            </div>
            <hr class="mt-5" />
            <Contact />
        </div>
    );
}