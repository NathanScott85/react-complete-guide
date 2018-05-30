import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Steve', age: 26 }, 
      {id: '', name: '', age: ''}
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0
  }
  
  }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Steve', age: 26 }, 
  //     {id: '', name: '', age: ''}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow, 
      toggleClicked: this.state.toggleClicked+1
    } );
  }

  render () {
    let persons = null;
  
   //Error boundary is a higher order component that simply wraps
   // a component with the goal of simply adding any errors that component might throw
    if ( this.state.showPersons ) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>; 
     
    }

    return (
      <div className={classes.App}>
      <Cockpit 
       appTitle ={this.props.title}
      showPersons={this.state.showPersons}
      persons ={this.state.persons}
      clicked={this.togglePersonsHandler}/>
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
