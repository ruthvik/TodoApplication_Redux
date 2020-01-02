import React from 'react';
import './App.css';
import Counter from './components/Counter'
import Todo from './components/Todo';
import {increment,decrement} from './Actions/actions'
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
        <Counter/>
      <Todo />
        </header>
      </div>
    );
  }
 
}

export default App;
