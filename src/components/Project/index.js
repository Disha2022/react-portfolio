import "./Project.css";

// used multiple times in the Portfolio section
const Project = ({ project }) => {
  const { name, description, imgName, gitLink, deployLink } = project;

  return (
    <div className="projectContainer">

      <img
        src={require(`../../assets/projects/${imgName}`).default}
        alt={name}
      />
      <div className="textContainer">
        <h3><a href={gitLink}>{name}
          <img alt="github logo" src={require(`../../assets/github.png`).default}></img>
        </a></h3>
        <p><a href={deployLink}>{description}</a></p>
      </div>
    </div>
  );
};

export default Project;
