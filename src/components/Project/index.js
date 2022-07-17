// used multiple times in the Portfolio section
const Project = ({ project }) => {
  const { name, description, imgName} = project;

  return (
      <div className="container">
        <h3 className="title">{name}</h3>
        <img
          src={require(`../../assets/large/${imgName}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
      </div>
  );
};

export default Project;
