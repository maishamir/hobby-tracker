import React from "react";
import hobbies from "../data/hobbies";
import HobbyCard from "../components/HobbyCard/HobbyCard";

function Home() {
  return (
    <>
      <header>
        <h1>Hobbies/Projects At a Glance</h1>
      </header>
      <main>
        {hobbies.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            icon={hobby.icon}
            hobbyname={hobby.name}
            projects={hobby.projects}
            bgColor={hobby.bgColor}
            id={hobby.id}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
