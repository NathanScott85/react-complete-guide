import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>I am a p tag</p>
        <Person />
      </div>
    );

    
  }
}

export default App;
