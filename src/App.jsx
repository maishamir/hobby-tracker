// import './App.css'
import hobbies from './data/hobbies'

function App() {

  return (
    <>
      <header>
        <h1>Hobbies/Projects At a Glance</h1>
      </header>
      <main>
        {
          hobbies.map(hobby => {
            return (
            <div style={{backgroundColor: hobby.bgColor}}>
              <h3 style={{color: '#f3d0c3'}}>{hobby.icon} {hobby.name}</h3>
                <p style={{color: "white"}}>{hobby.projects.length} {hobby.projects.length >= 2 ? `projects` : `project`}</p>
              </div>
            )
          }) 
        }
      </main>
    </>
  )
}

export default App
