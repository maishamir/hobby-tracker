import hobbies from "../../data/hobbies";
import "./HobbyCard.scss"

import React from "react";

function HobbyCard({icon, hobbyname, projects, bgColor}) {
  return <div className="hobbyCard" style={{"--bgColor": bgColor}}>
    <h3 className="hobbyCard__title">
      {icon} {hobbyname}
      </h3>
    <div className="hobbyCard__details">
      <p>{projects.length} {projects.length >= 2 ? `projects` : `project`}</p>
    </div>
  </div>;
}

export default HobbyCard;

