import React from "react";
import "./work.css";
import { Link } from "react-router-dom";
import data from '../../store/project.json';

export default function Work() {

  const projects = data.projects;
  let count=0;
  return (
    <>
      <div className="mainWork " id="work">
      <h1
          className="intro"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}>
          Work
        </h1>

        <div className="firstmain">
          <h1 className="projects">Project</h1>

          {projects.map((project) =>{

            if(project.No<=3){
              return <div className="project">
                <h2>{project.project_name} | {project.year} | {project.tech} |  <Link style={{color:'#e7a69f'}} to={project.link} target="_blank">Link</Link> </h2>
                <p>● {project.description1}</p>
                <p>● {project.description2} </p>
                <p>● {project.description3} </p>
               </div> 
            
            }
          } )}
          <div className="project">
            <h2>More Projects... |  <Link style={{color:'#e7a69f'}} to='/projects'>Link</Link>  </h2>
         
          </div>
        </div>



        <div className="secondMain">
          <div className="blank"></div>
          <h1 className=" experience ">EXPERIENCE</h1>
          <div className="exp">
            <h2>Google Developer Student Club, GGV Bilaspur —Team Member</h2>
            <h4>April-2021 - Dec-2021 </h4>
            <h4>[ Member - Cloud/DevOps Club ] </h4>
          </div>

          <div className="exp">
            <h2>Equlibrio (Techinal Fest), GGV Bilaspur — Team Member</h2>
            <h4>JAN 2022 - PRESENT</h4>
            <h4>[ EventHead -Gaming Team ]</h4>
          </div>
        </div>

        
      </div>
    </>
  );
}
