import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {


  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 27},
      {name: 'Stephany', age: 26}
    ],
    someOtherPersons: 'someOtherValue'
  };

  switchNameButtonClickHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 27},
        {name: 'Stephany', age: 29}
      ]
    });
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 27},
        {name: 'Stephany', age: 29}
      ]
    });
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
    return (
      <div className="App">
        <h1> Hello There!</h1>
        <button
          style = {buttonStyle} 
          onClick = {this.switchNameButtonClickHandler.bind(this, 'Maximilian')}>Switch Name</button>
          <Person 
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}>
          </Person>
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age}
            click = {this.switchNameButtonClickHandler.bind(this, 'Max!')}
            nameChangeHandler = {this.nameChangedHandler}>
            My Hobbies: Reading books
          </Person>
          <Person 
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}>
          </Person>
      </div>
    );
  }
}

export default App;
