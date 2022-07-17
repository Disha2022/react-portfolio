import logo from "../../../assets/logo.svg";
function About() {
    return (
        <>
            <h2>
                About me.
            </h2>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Awesome description 1.
            </p>
            <p>
                Awesome description 2.
            </p>
        </>
    );
}

export default About;