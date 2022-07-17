import "./Footer.css";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import stack from "../../assets/stack.png";
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com">
            <img src={github} alt="github.com" />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com">
            <img src={linkedIn} alt="linkedin.com" />
          </a>
        </li>

        <li>
          <a href="https://stackoverflow.com">
            <img src={stack} alt="stackoverflow.com" />
          </a>
        </li>

      </ul>

    </footer>
  );
}

export default Footer;