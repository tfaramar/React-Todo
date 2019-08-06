import React from 'react';

const Todo = props => {
    return (
        <div
            className={`todo ${props.todo.completed ? 'completed' : ''}`}

            onClick={() => props.toggleTodo(props.todo.id)}
        >
            <span>{props.todo.task}</span>
        </div>
    );

};

export default Todo;