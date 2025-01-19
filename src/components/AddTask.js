import React, { useState } from "react";

export default function AddTask() {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      setTaskText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginRight: "10px",
          width: "70%",
        }}
      />
      <button type="submit" style={{ padding: "10px 15px", fontSize: "16px" }}>
        Add Task
      </button>
    </form>
  );
}
