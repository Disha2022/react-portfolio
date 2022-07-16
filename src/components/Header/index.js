import "./Header.css";
function Header() {

    return (
      <header>
        <h1>
        <a data-testid="link" href="/">
          Disha Barua
        </a>
        </h1>
        <nav>
          <a href="/about">About me</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </nav>
      </header>
    );
  }
  
  export default Header;