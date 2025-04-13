import hobbies from "../../data/hobbies";
// import HobbyCard from "../HobbyCard/HobbyCard.jsx"

import React from "react";
import { Link } from "react-router-dom";
import "./HobbyCard.scss";

function HobbyCard({ icon, hobbyname, projects, bgColor, id }) {
  return <Link to={`/${id}`}>
    <div className="hobbyCard" style={{ "--bgColor": bgColor }}>
      <h3 className="hobbyCard__title">
        {icon} {hobbyname}
      </h3>
      <div className="hobbyCard__details">
        <p>
          {projects.length} {projects.length >= 2 ? `projects` : `project`}
        </p>
      </div>
    </div>
  </Link>;
}

export default HobbyCard;
