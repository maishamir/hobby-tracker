import React from "react";
import { Link } from "react-router-dom";
import hobbies from "../../data/hobbies";
import "./Coding.scss";


function Coding() {

  const codingProjects = hobbies.find(hobby => hobby.id === "coding")
  

  return (
    <div>
      <Link to="/">⬅ Back to Home</Link>
      <h1>💻 Coding Projects at a Glance 💻 </h1>

      <div className="projects">
      {codingProjects.projects.map(project => {
        return <div className="projectCard" key={project.id}>

          <p className="projectCard__name">{project.name}</p>
          <div className="projectCard__milestones">
            {project.milestones.map(milestone => {
              return (
                <div className="projectCard__milestones-milestone">
                  <input type="checkbox" checked={milestone.complete} id={milestone.state} name={milestone.state} />
                  <label htmlFor={milestone.state}>{milestone.state}</label>
                </div>
                
              )
            })}
          </div>
        </div>
      })}
      </div>
    </div>
  );
}

export default Coding;
