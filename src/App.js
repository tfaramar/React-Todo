import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

import './components/TodoComponents/Todo.css';


const todoData = [
  {
    task: 'Get a haircut',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Make pesto out of all that basil',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Write a postcard to Anya',
    id: 152881708576,
    completed: false
  },
  {
    task: 'Practice piano',
    id: 152881706543,
    completed: false
  },
  {
    task: 'Program a to do list',
    id: 1528817088897,
    completed: false
  },
  {
    task: 'Go for a run',
    id: 1528817069999,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  toggleTodo = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = taskName => {
    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = () => {
    console.log('BLABLAHBLAHABB')
    this.setState({
      todos: this.state.todos.filter(todo => 
        {
          if (todo.completed === false){
            return todo;
          }
        })
    });
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addTodo(this.state.todo);
    
  };

  render() {
    return (
      <div className="app-container">
        <div className="header">
          <h1>Today's To-dos</h1>
          <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
