import React from "react";
import ToDo from "./ToDo";

const ToDoList = function({toDoList, myToggle}) {
    return (
        <div>
            {
                toDoList.map(function(todo) {
                    return (
                        <ToDo todo={todo} myToggle={myToggle}/>
                    )
                })
            }
        </div>
    );
};

export default ToDoList;