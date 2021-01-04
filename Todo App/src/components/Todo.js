import React, { Component } from 'react'
import Items from './Items'

export class Todo extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Items key = {todo.id} todo= {todo} 
            markComplete={this.props.markComplete} 
            delTodo={this.props.delTodo} />
        ))
    }
}

export default Todo
