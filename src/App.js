import React, { useState } from "react";
import './App.css';
import Todo from './components/Todo';

const App = () => {
  const [task, setTask] = useState('');
  const [taskLists, setTaskLists] = useState([]);

  const handleAddTask = () => {
    setTaskLists([...taskLists, task]);
    setTask('');
  }

  const doneTask = (index) => {
    let tempTaskLists = [...taskLists];
    tempTaskLists.splice(index, 1);
    setTaskLists(tempTaskLists);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <h4>My Todo List</h4>
        </div>

        <div className="content">
          {
            taskLists.length > 0 
            ?
            taskLists.map((task, index) => {
              return <Todo key={index} task={task} onClick={() => doneTask(index)} />
            })
            :
            <p><i>You haven't create todo list yet.</i></p>
          }
        </div>

        <div className="form-add">
          <input type="text" className="input-todo" placeholder="Write A Task" onChange={text => setTask(text.target.value)} value={task} />
          <button type="button" className="btn-add rounded-button" onClick={() => handleAddTask()}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
