import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hello There!</h1>
      <button>Switch Name</button>
        <Person name = 'Max' age = '26'></Person>
        <Person name = 'Manu' age = '27'>My Hobbies: Reading books</Person>
        <Person name = 'Stephani' age = '28'></Person>
      </div>
    );
  }
}

export default App;
