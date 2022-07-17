import { useState } from "react";
import "./Project.css";

// used multiple times in the Portfolio section
const Project = ({ project }) => {
  const { name, description, imgName, gitLink, deployLink } = project;
  const [isShown, setShow] = useState(false);
  function show() {
    setShow(true);
  }
  function hide() {
    setShow(false);
  }
  return (
    <div className="projectContainer">

      <img
        src={require(`../../assets/projects/${imgName}`).default}
        alt={name}
        onMouseEnter={show}
        onMouseLeave={hide}
      />
      {isShown && (
        <div className="textContainer" onMouseEnter={show} onMouseLeave={hide}>
          <h3><a href={deployLink}>{name}</a><a href={gitLink}>
            <img className="gitImg" alt="github logo" src={require(`../../assets/github.png`).default}></img>
          </a></h3>
          <p>{description}</p>
        </div>
      )}

    </div>
  );
};

export default Project;
