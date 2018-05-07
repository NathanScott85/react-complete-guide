import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>I am a p tag</p>
        <p>--------</p>
        <Person  name="Max" age="24"/>
        <Person name="Steve" age="29"> My Hobbies include: Goat Racing </Person>
        <Person  name="Robert" age="31"/>
      </div>
    );

    
  }
}

export default App;
