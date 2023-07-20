import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css';
import { faChessQueen, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div>
            <div className="container mt-5 d-flex justify-content-between about-container">
                <div className="about-description-container">
                    <h1>About Me</h1>
                    <p className="about-description ">Hey there! I'm <span className="purple">Vivek</span>, a software developer with 4 years of experience in developing web and mobile applications.
                        I have a passion for writing clean and efficient code.
                    </p>
                    <p className="about-description mt-4">
                        I have a bachelors degree in Computer Science engineering from Mumbai University.
                        During my tenure at Tata Consultancy Services, I had the exciting opportunity to collaborate 
                        with a group of brilliant Canadian developers, which allowed me to hone my skills in C# .NET 
                        microservices and Oracle.
                    </p>
                    <p className="about-description mt-4">
                        I like learning new things everyday to improve my current development process.
                        One of the traits I'm known for is my unwavering attention to detail. I believe that it's the small, intricate elements
                        that elevate a good project to greatness.
                        I take pride in producing robust, bug-free code that not only meets project requirements but also exceeds expectations.
                    </p>
                </div>
                <div className="about-hobbies-container d-flex flex-column">
                    <h3 className="interests">My interests</h3>
                    <ul>
                        <li className="list-item"><span className="me-2">Chess</span><FontAwesomeIcon icon={faChessQueen} color="#5905FF" /></li>
                        <li className="list-item"><span className="me-2">Movies</span><FontAwesomeIcon icon={faVideo} color="#0087A9" /></li>
                        <li className="list-item"><span className="me-2">Music</span><FontAwesomeIcon icon={faMusic} color="#EA638C" /></li>
                    </ul>
                    <h3 className="technical-skills mt-3">Technical Skills</h3>
                    <ul>
                        <li className="list-item">.NET Framework / .NET Core</li>
                        <li className="list-item">Oracle PL/SQL, SQL Server</li>
                        <li className="list-item">Angular, React</li>
                        <li className="list-item">JavaScript, TypeScript</li>
                        <li className="list-item">Jenkins, SonarQube</li>
                        <li className="list-item">Git, GitHub</li>
                    </ul>
                </div>
            </div>
            <hr className="mt-5" />
        </div>
    );
}