import React from 'react';
import './App.css';
import TitleBar from "./Components/TitleBar"

const App = () => {
  return (
    <div className="App">
      <TitleBar />

      <form>
        <select className="breedSelection" id="breeds"> 
          <option>TestOption1</option>
          <option>TestOption2</option>
          <option>TestOption3</option>
          <option>TestOption4</option>
        </select>
      </form>

      <h1>Hello React</h1>
      <h2>Hello you!</h2>

      
    </div>
  );
}

export default App;
