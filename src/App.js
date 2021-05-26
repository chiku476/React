import React, { Component } from 'react';
import Doss from'./App.css';
import Person from './Person/Person';
//import styled from 'styled-components'

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    

    let persons = null;
    let mycss=' ';
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( ( person, index ) => {
            return <Person
              click={() => this.deletePersonHandler( index )}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.nameChangedHandler( event, person.id )} />
          } )}
        </div>
      );
      mycss=Doss.Red;
    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( Doss.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( Doss.bold ); // classes = ['red', 'bold']
    }

    return (
      <div>
        <div className={Doss.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join( ' ' )}>This is really working!</p>
          <button className={mycss }
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default ( App );
