
import { useState } from 'react'
import './App.css'

function App() {
  const projectInfo = {
    description: "Project.Palina Dolbik.Have a nice day!"
  };


  const items = ["El1", "El2", "El3"];

  return (
    <div>
      <h1>{projectInfo.description}</h1>
      <ul>  
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;