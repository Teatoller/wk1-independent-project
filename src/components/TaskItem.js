import React from 'react';

const TaskItem = ({ task, updateTask }) => {
  const { id, text, completed } = task;

  const handleChange = () => {
    updateTask(id, !completed);
  };

  return (
    <li
      style={{
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChange}
        style={{ transform: 'scale(1.5)' }}
      />
    </li>
  );
};

export default TaskItem;
