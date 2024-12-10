function ProjectCard({ title, description, link }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>View Project</a>
      </div>
    );
  }
  
  export default ProjectCard;