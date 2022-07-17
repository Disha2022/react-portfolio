import logo from "../../../assets/logo.svg";
function About() {
    return (
        <>
            <h2>
                About me
            </h2>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hi! I am Disha, I graduated from City College of New York in December 2017 with a bachelor’s degree in Mechanical Engineering.
                While working in a prestigious Aerospace Company,
                I am also currently enrolled in school for a master’s degree in Systems engineering.
            </p>
            <p>
                In addition, I am enrolled in UCF (University Of Central Florida) Coding Bootcamp,
                where I am learning different programming languages.
                My current career goal is to gain experience and learn as much as I can.
                I take pride in what I do. Through active learning and an enthusiasm to help others,
                I plan to innovate myself everyday.
            </p>
        </>
    );
}

export default About;