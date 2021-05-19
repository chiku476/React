import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'pushpendra', age: 23 },
      { name: 'piiyu', age: 20},
      { name: 'priya', age: 20 }
    ],
    otherState: 'some other value',
    showperson:false
  }

  switchNameHandler = (abc) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: abc, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };
  switchNamed = (abc) =>{
    this.setState({
      persons: [
        { name: abc.target.value, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  } ;
toggelerHandler=()=>{
  const togg=this.state.showperson
     this.setState({showperson:!togg})
}
  render() {
    const style ={
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding:'8px',
       cursor:'pointer'
    };
    let pet=null
   if(this.state.showperson){
   pet=(
    <div>
    <Person
      name={this.state.persons[0].name}
      age={this.state.persons[0].age}
      changed={this.switchNamed }
   />
   <Person
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,'pushpa')}
    >
     My Hobbies: Racing
   </Person>
   <Person
       name={this.state.persons[2].name}
       age={this.state.persons[2].age}
   />
 </div>
 
   );
   }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.toggelerHandler} style={style}>Switch Name</button>
       
       {pet}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
