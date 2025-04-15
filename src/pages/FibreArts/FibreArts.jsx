import React from 'react'
import { Link } from 'react-router-dom'
import hobbies from '../../data/hobbies'
import "./FibreArts.scss"

function FibreArts() {

  const fibreProjects = hobbies.find(hobby => hobby.id==="fiberArts")

  return (
    <div>
      <Link to="/">⬅ Back to Home</Link>
      <h1>🧶 Crochet & Knitting Projects at a Glance 🧶</h1>

      <div className="fibre">
        {fibreProjects.projects.map(project => {
          return <div className="fibre_projectCard" key={project.id}>
            <h3 className="fibre__projectName">{project.name}</h3>
            <p className="fibre__projectStatus">{project.status}</p>
            <hr />
            <div className="fibre__projectInfo">
              <p><strong>Pattern Link:</strong><a href={project.patternDetails.pattern} className="fibre__projectInfo-link">{project.name}</a> </p> 
              <p className="fibre__projectInfo-yarn"><strong>Yarn:</strong> {project.patternDetails.yarn}</p>
              <p className="fibre__projectInfo-tools"><strong>Tools:</strong> {project.patternDetails.tools}</p>
              <p className="fibre__projectInfo-level"><strong>Skill Level:</strong> {project.patternDetails.skillLevel}</p>
              <div className="fibre__projectInfo-colors">
                <p>Project Colors</p>
                {project.patternDetails.colors.map((color, index) => {
                  return <div className="fibre_projectInfo-color" key={index} style={{width: "25px", height: "25px", backgroundColor: color}}></div>
                })}
              </div>
            </div>
            <div className="fibre__projectNotes">
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

