import React from 'react';
import './App.css';
import Cat from "./Components/Cat";
import Home from "./Components/Home";
import TitleBar from "./Components/TitleBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <TitleBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:catID" component={Cat} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
