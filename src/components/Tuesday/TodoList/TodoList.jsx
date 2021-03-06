import React from "react";
import s from './TodoList.css'
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {restoreStateLocalStorage, saveStateToLocalStorage} from './LocalStorage';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();

    }

    componentDidMount() {
        this.restoreState();
    }



    saveState = () => {
        saveStateToLocalStorage(this.state, "our-state")
        // // переводим объект в строку
        // let stateAsString = JSON.stringify(this.state);
        // // сохраняем нашу строку в localStorage под ключом "our-state"
        // localStorage.setItem("our-state", stateAsString);
    }

    restoreState = () => {
        // объявляем наш стейт стартовый
        let state = {
            tasks: [],
            filterValue: "All"
        };
        state = restoreStateLocalStorage("our-state", state)
        // // считываем сохранённую ранее строку из localStorage
        // let stateAsString = localStorage.getItem("our-state");
        // // а вдруг ещё не было ни одного сохранения?? тогда будет null.
        // // если не null, тогда превращаем строку в объект
        // if (stateAsString != null) {
        //     state = JSON.parse(stateAsString);
        // }

        // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
        this.setState(state, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1;
                }
            })
        });
    }

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All"
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        // инкрементим (увеличим) id следующей таски, чтобы при следюущем добавлении, он был на 1 больше
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState()
        });

    }

    deleteTask = (taskId) => {
        let filteredTasks = this.state.tasks.filter((t) => {
            return t.id !== taskId
        })
        this.setState({
            tasks: filteredTasks
        }, () => {
            this.saveState()
        })

    }


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState();
        });
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id != taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });
debugger
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    }
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    }
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   changePriority={this.changePriority}
                                   deleteTask={this.deleteTask}
                                   tasks={this.state.tasks.filter(t => {
                                       if (this.state.filterValue === "All") {
                                           return true;
                                       }
                                       if (this.state.filterValue === "Active") {
                                           return t.isDone === false;
                                       }
                                       if (this.state.filterValue === "Completed") {
                                           return t.isDone === true;
                                       }
                                   })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default TodoList;

