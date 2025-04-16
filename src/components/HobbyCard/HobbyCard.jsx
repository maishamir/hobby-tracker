import hobbies from "../../data/hobbies";
// import HobbyCard from "../HobbyCard/HobbyCard.jsx"

import React from "react";
import { Link } from "react-router-dom";
import "./HobbyCard.scss";

function HobbyCard({ icon, projectName, status,  bgColor, id }) {
  return <Link to="/${id}">
    <div className="hobbyCard" style={{ "--bgColor": bgColor }}>
      <p className="hobbyCard__title">
        {projectName}
        {status}
      </p>
    </div>
  </Link>;
}

export default HobbyCard;

      // <h3 className="hobbyCard__title">
      //   {icon} {projectName}
      // </h3>
      // <div className="hobbyCard__details">
      //   <p>
      //     {projects.length} {projects.length >= 2 ? `projects` : `project`}
      //   </p>
      // </div>