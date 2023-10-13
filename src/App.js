import React, { Component } from 'react';
import Catalogue from "./Catalogue";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Hello world</h2>
          <Catalogue />
      </div>
    );
  }
}

export default App;
