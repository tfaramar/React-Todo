import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    };

    render() {
        //console.log(this.props)
        return (
            <div className="form-and-btns">
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        value={this.todo}
                        name="todo"
                        placeholder="what's the task?"
                        onChange={this.props.handleChange}
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