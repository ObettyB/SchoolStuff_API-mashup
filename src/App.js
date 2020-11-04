import React from 'react';
import './App.css';
import Cat from "./Components/Cat";
import Home from "./Components/Home";
import TitleBar from "./Components/TitleBar";

import { Switch, Route, HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <TitleBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:catID" component={Cat} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
