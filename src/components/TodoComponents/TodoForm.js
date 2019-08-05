import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todo);
        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.todo}
                    name="todo"
                    placeholder="what's the task?"
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;