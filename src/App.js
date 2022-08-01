import './App.css'; 
import React, { useState } from 'react';
// my component
import Header from './Header';
import ToDoList from './ToDoList';
// my data
import data from "./data.json";

function App() {

  const [ myList, setMyList ] = useState(data);

  const myToggle = (id) => {
    let checked = myList.map(task => {
      return task.id == id ? {...task, complete: !task.complete} : {...task};
    });
    setMyList(checked);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList = {myList} myToggle = {myToggle} />
    </div>
  );
} 

export default App;
