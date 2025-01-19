
import React, { useState } from "react";import './App.css';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);

  const addTask = () => {};

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
