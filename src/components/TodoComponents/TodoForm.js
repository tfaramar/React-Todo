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
            <div className="form-and-btns">
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
                <button className="clear-button" onClick={this.props.clearCompleted}>
                    Clear Completed Tasks
                </button>
            </div>
            
        );
    }
}

export default TodoForm;