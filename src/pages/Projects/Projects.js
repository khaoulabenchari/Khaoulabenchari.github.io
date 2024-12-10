import ProjectCard from '../../Components/ProjectCard/ProjectCard'
const projects = [
    { title: 'Project 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', description: 'Description 2', link: '#' },
  ];
  
  function Projects() {
    return (
      <section>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    );
  }
  export default Projects;