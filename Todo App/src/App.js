import React, { Component } from 'react';
import Header from './components/Header'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css'
import {v4 as uuid} from 'uuid';

export class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Need to complete Mern stack by end of January',
        completed: false
      },
      {
        id: uuid(),
        title: 'Make major PR in oppia',
        completed: false
      },
      {
        id: uuid(),
        title: 'Build a fullstack app with backend using mern',
        completed: false
      }
    ],
  }

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map((todo) =>{
      if(todo.id === id)
        todo.completed = !todo.completed
      return todo
    })})
  }

  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo ={
      id: uuid(),
      title, //title: title
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
    console.log(title);
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todo  todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App

