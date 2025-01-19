import React, { useState } from "react";

const TaskItem = ({ task, updateTaskContent, updateTaskStatus }) => {
  const { id, text, completed } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditText(text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      updateTaskContent(id, editText);
      setIsEditing(false);
    }
  };

  const handleChange = () => {
    updateTaskStatus(id, !completed);
  };

  return (
    <li
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ flex: 1, marginRight: "10px", padding: "5px" }}
        />
      ) : (
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
      )}

      {isEditing ? (
        <div>
          <button onClick={handleSave} style={{ marginRight: "5px" }}>
            Save
          </button>
          <button onClick={handleEditToggle}>Cancel</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleChange}
            style={{ marginRight: "10px", transform: "scale(1.5)" }}
          />
          <button onClick={handleEditToggle}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
