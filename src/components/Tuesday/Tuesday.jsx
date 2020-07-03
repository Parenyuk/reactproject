import React from "react";
import s from './../../App.module.css'
import TodoList from "./TodoList/TodoList";


const Tuesday = () => {
    return (
        <div className={`${s.App} && ${s.Tuesday}`}>
            <div>
                Tuesday
            </div>
        <TodoList />
        </div>
    )
}

export default Tuesday;



