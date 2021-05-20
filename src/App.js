import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'pushpendra', age: 23 },
      {id:'2' ,name: 'piiyu', age: 20},
      {id:'ssd', name: 'priya', age: 20 }
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
  switchNamed = (event,id) =>{
    const personindex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={...this.state.persons[personindex]
    };
    console.log(person);
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personindex]=person;

    this.setState({persons:persons});
  } 
toggelerHandler=()=>{
  const togg=this.state.showperson;
     this.setState({showperson:!togg});
};

deletehandler=(indexs)=>{
  const persons=this.state.persons;
  persons.splice(indexs,1);
  this.setState({persons: persons});
};
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
      {this.state.persons.map((person,index)=>{
        return <Person name={person.name} age={person.age}
        click={()=>this.deletehandler(index)}
        key={person.id}
        changed={(event)=>this.switchNamed(event,person.id)}/>
      })}
   
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
