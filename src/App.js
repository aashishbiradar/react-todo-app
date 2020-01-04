import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos : [
      {
        id : 1,
        title : "Task 1",
        completed : false
      },
      {
        id : 2,
        title : "Task 2",
        completed : false
      },
      {
        id : 3,
        title : "Task 3",
        completed : false
      }
    ]
  }

  //toggle complete
  markComplete = (id) => {
      this.setState({todos:this.state.todos.map(todo => {
        if(todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })});
  }

  //delete todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    ); 
  }
}

export default App;
