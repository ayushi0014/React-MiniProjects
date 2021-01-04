import React, { Component } from 'react'

export class Items extends Component {
    getStyle = () => {
        return{
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
            backgroundColor: '#EBEBED',
            padding: '20px',
            borderBottom: '1px white dotted', 
        }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style= {this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)}  />
                    {'  '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '4px 7px',
    float: 'right',
    border: 'none',
    borderRadius: '50%',

}

export default Items
