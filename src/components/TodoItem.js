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
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                    {'  '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={delBtn}>x</button>
                </p>
            </div>
        )
    }
}

/*** styles ***/
const delBtn = {
    backgroundColor : '#f00',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    float : 'right',
    cursor : 'pointer',
    padding : '2px 6px',
    fontSize: '16px',
    fontWeight: 'bold'

}
/*** styles ***/

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
