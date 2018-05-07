import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name:"Max", age:"29"},
      {name:"Steve", age:"31"},
      {name:"Robert", age:"24"}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>I am a p tag</p>
        <p>--------</p>
        <div>
        <button>Switch Name</button>
        </div>
        <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies include: Goat Racing </Person>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    
  }
}

export default App;
