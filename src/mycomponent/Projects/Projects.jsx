import React from 'react';
import { Link } from 'react-router-dom'
import data from '../../store/project.json';

const Projects = () => {

  const projects = data.projects;
  // console.log(projects);

  return (
    <div>

      <div className="firstmain">
          <h1 className="projects">Project</h1>

        
          {projects.map((project) => (
          <div className="project">
          <h2>{project.project_name} | {project.year} | {project.tech} |  <Link style={{color:'#e7a69f'}} to={project.link} target="_blank">Link</Link> </h2>
          <p>● {project.description1}</p>
          <p>● {project.description2} </p>
          <p>● {project.description3} </p>
         </div>
        ))}

          <h1 className="projects">Return to Website... | <Link style={{color:'#e7a69f'}} to='/'>Link</Link></h1> 
        </div>
      
    </div>
  )
}

export default Projects