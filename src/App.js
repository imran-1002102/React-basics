import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

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
    const buttonStyle = {
      font: 'inherit',
      color: 'white',
      border: '2px solid blue',
      backgroundColor: 'black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(
            (person, index) => {
              return <Person 
              click = {this.deletePersonHandler.bind(this, index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              nameChangeHandler = {(event) => this.nameChangeHandler(event, person.id)}/>
            } 
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello There!</h1>
        <button
          style = {buttonStyle} 
          onClick = {this.togglePersonsView}>Toggle Persons View</button>
          {persons}
      </div>
    );
  }
}

export default App;
