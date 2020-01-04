import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through':'none',
            backgroundColor : '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding : '10px'  
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

export default TodoItem
