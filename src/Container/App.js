import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
import './App.css';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 'agfdg1', name: 'Max', age: 28},
      {id: 'agfdg2', name: 'Manu', age: 27},
      {id: 'agfdg3', name: 'Stephany', age: 26}
    ],
    someOtherPersons: 'someOtherValue',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsView = () => {
    const showPerson = this.state.showPersons;
    this.setState({showPersons: !showPerson});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            nameChanged = {this.nameChangeHandler}/>
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
            <Cockpit 
            persons = {this.state.persons}
            clicked = {this.togglePersonsView}
            showPersons = {this.state.showPersons}/>
            {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
