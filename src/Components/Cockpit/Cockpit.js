import React from 'react';

const cockpit = (props) => {

    const buttonStyle = {
        font: 'inherit',
        color: 'white',
        border: '2px solid blue',
        backgroundColor: 'green',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightGreen',
          color: 'black'
        }
      };
  

    const classes = [];
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }

    if (props.showPersons) {
        buttonStyle.backgroundColor = 'red';
        buttonStyle[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
      }

    return(
            <div>
                <h1 className= {classes.join(' ')}> Hello There!</h1>
                <button
                    style = {buttonStyle} 
                    onClick = {props.clicked}>
                    Toggle Persons View
                </button>
            </div>
    );
}

export default React.memo(cockpit);