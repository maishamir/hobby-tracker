// import './App.css'
import hobbies from "./data/hobbies";
import HobbyCard from "./components/HobbyCard/HobbyCard";

function App() {
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
          />
        ))}
      </main>
    </>
  );
}

export default App;
