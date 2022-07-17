import "./Footer.css";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import stack from "../../assets/stack.png";
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Disha2022">
            <img src={github} alt="Disha's github.com" />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/dishaaa/">
            <img src={linkedIn} alt="Disha's linkedin.com" />
          </a>
        </li>

        <li>
          <a href="https://stackoverflow.com/users/19567785/disha-barua">
            <img src={stack} alt="Disha's stackoverflow.com" />
          </a>
        </li>

      </ul>

    </footer>
  );
}

export default Footer;