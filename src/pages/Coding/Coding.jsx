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

          <div className="milestones">
            {project.milestones.map(milestone => {
              return (
                <div className="milestones__item">
                  <label htmlFor="" className="milestones__checkbox-label">
                    <input type="checkbox" name={milestone.state} id={milestone.state} className="milestones__checkbox"/>
                    {milestone.state}
                  </label>
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

{/* <div className="projectCard__milestones-milestone">
                  <input type="checkbox" checked={milestone.complete} id={milestone.state} name={milestone.state} />
                  <label htmlFor={milestone.state}>{milestone.state}</label>
                </div> */
}

{/* <div className="milestones__bubbleContainer">
                    <input type="checkbox" name={milestone.state} id={milestone.state} className="milestones__checkbox" />
                    <div className="milestones__svg-container">
                      <svg width="64px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="seagreen" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                  </div> */}


