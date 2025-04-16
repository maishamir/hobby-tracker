import React from 'react'
import { Link } from 'react-router-dom'
import hobbies from '../../data/hobbies'
import "./FibreArts.scss"

function FibreArts() {

  const fibreProjects = hobbies.find(hobby => hobby.id==="fiberArts")

  return (
    <div className='fibreArts'>
      <Link to="/">⬅ Back to Home</Link>
      <h1>🧶 Crochet & Knitting Projects at a Glance 🧶</h1>

      <div className="fibreProjects">
        {fibreProjects.projects.map(project => {
          return <div className="fibreProjects__projectCard" key={project.id}>
            <h3 className="fibreProjects__projectName">{project.name}</h3>
            <p className="fibreProjects__projectStatus">{project.status}</p>
            {/* <hr/>`` */}
            <div className="fibreProjects__projectInfo">
              <p><strong>Pattern Link:</strong><a href={project.patternDetails.pattern} className="fibreProjects__projectInfo-link">{project.name}</a> </p> 
              <p className="fibreProjects__projectInfo-yarn"><strong>Yarn:</strong> {project.patternDetails.yarn}</p>
              <p className="fibreProjects__projectInfo-tools"><strong>Tools:</strong> {project.patternDetails.tools}</p>
              <p className="fibreProjects__projectInfo-level"><strong>Skill Level:</strong> {project.patternDetails.skillLevel}</p>
              <div className="fibreProjects__projectInfo-colors">
                <p>Project Colors</p>
                {project.patternDetails.colors.map((color, index) => {
                  return <div className="fibreProjects_projectInfo-color" key={index} style={{width: "25px", height: "25px", backgroundColor: color}}></div>
                })}
              </div>
            </div>
            <div className="fibreProjects__projectNotes">
              <strong>Notes:</strong>
              <p>{project.notes}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default FibreArts

