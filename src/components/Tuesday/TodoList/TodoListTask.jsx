import React from "react";
import s from './TodoList.css'
import Priority from "./Priority";

class TodoListTask extends React.Component {
    // state = {
    //     priority:
    // }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    }
    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
    }
    // changePriority = (e) => {
    //     this.props.changePriority(this.props.task.id, e.currentTarget.value)
    // }

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
    }




    render = () => {

        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={containerCssClass}>
                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                             value={this.props.task.title}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                },  priority: <Priority   taskId={this.props.task.id} priority={this.props.task.priority} changePriority={this.props.changePriority}/>
                <span onClick={this.deleteTask}>{` x`}</span>
            </div>
        );
    }
}

export default TodoListTask;

// {this.props.task.priority}

