import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    const { tasks, updateTask } = this.props;

    return (
      <div>
        {tasks.length === 0 ? (
          <p>No tasks available. Add a new task!</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TaskList;
