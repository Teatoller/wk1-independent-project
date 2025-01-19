import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const updateTaskContent = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId, completed) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTaskContent={updateTaskContent}
        updateTaskStatus={updateTaskStatus}
      />
    </div>
  );
}

export default App;
