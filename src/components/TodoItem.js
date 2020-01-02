import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.todo.task}</h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

export default TodoItem
