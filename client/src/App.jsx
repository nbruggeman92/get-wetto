import { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="background"></div>
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/result" component={Result} />
            </Switch>
          </div>
        </div>
      
    </BrowserRouter>
  );
}

export default App;