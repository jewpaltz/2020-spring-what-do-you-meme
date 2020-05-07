import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import MyNav from "./components/Nav";

const About = ()=> <h1 className="title is-1">About Page</h1>
const Game = ()=> <h1 className="title is-1">Game Page</h1>
const Home = ()=> <h1 className="title is-1">Home Page</h1>

function App() {
  return (
    <Router className="App">
      <MyNav />

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>      
    </Router>
  );
}

export default App;
