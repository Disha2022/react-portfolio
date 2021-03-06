import "./Resume.css";
function Resume() {
    return (
        <div className="resumeContainer">
            <h2>
                Resume
            </h2>
            <p>
                Download my <a href="disha-resume.pdf" download>resume</a>
            </p>
            <h3>
                Front-end Proficiencies
            </h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>responsive design</li>
            </ul>

            <h3>
                Back-end Proficiencies
            </h3>
            <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>APIs</li>
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>
        </div>
    );
}


export default Resume;