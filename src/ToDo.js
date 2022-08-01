import React from "react";

const ToDo = function({todo, myToggle}) {

    const handleClick = (e) => {
        e.preventDefault()
        myToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} onClick = {handleClick} className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    );
};

export default ToDo;