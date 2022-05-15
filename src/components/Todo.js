import React from "react";

const Todo = (props) => {
    return (
        <div className="todo-list">
            <p>{props.task}</p>
            <button className="btn-done" onClick={props.onClick}>Done</button>
        </div>
    )
}

export default Todo;