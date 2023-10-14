import React, { Component } from 'react';
import Catalogue from "./Catalogue";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Ancient dog breeds catalogue</h1>
          <Catalogue />
          <footer>This project was coded by Maja Kucinska-Kijo and is {""}
            <a href="https://github.com/majakucinska/react-animal-catalogue">
                open-sourced
            </a></footer>
      </div>
    );
  }
}

export default App;
