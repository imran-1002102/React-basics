import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name = 'Max' age = '26'></Person>
        <Person name = 'Manu' age = '27'></Person>
        <Person name = 'Stephani' age = '28'></Person>
      </div>
    );
  }
}

export default App;
