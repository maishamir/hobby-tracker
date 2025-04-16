import React from "react";
import hobbies from "../../data/hobbies";
import HobbyCard from "../../components/HobbyCard/HobbyCard";
import "./Home.scss";

function Home() {
  return (
    <>
      <header className="header">
        <h1>Hobbies/Projects At a Glance</h1>
      </header>
      <main className="hobbies">
        {hobbies.map((hobby) => {
          return (
            <div className="hobbies__category">
              <h3 className="hobbies__category-title">
                {hobby.icon} {hobby.name} {hobby.icon}
              </h3>
              <div className="hobbies__projects">
                {hobby.projects.map((project) => {
                  return (
                    <div
                      className="projectCard"
                      key={project.id}
                      style={{ backgroundColor: hobby.bgColor }}
                    >
                      <p className="projectCard__title">{project.name}</p>
                      <div className="projectCard__details">
                        {project.status}
                        <p className="projectCard__details-link">
                          {project.projectDetails.link}
                        </p>
                        <p className="projectCard__details-startDate">
                          Started: <input type="date" name="" id="" />{" "}
                        </p>
                        <div className="projectCard__details-notes">
                          <p>Notes:</p>
                          {project.notes}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Home;
