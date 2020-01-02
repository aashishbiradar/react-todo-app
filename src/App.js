import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos : [
      {
        id : 1,
        task : "Task 1",
        completed : true
      },
      {
        id : 2,
        task : "Task 2",
        completed : false
      },
      {
        id : 3,
        task : "Task 3",
        completed : true
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    ); 
  }
}

export default App;
