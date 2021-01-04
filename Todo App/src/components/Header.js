import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style = {headerStyle}>
                Todo List
            </div>
        )
    }
}

const headerStyle ={
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontSize: '25px'
}

export default Header
