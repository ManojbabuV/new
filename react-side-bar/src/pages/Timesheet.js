import React, { useEffect, useState } from 'react';
import './time.css'; // Import CSS file for styling

const Timesheet = () => {
  // Define state variables to manage task data and completion status
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', completed: false },
    { id: 2, task: 'Task 2', completed: false },
    { id: 3, task: 'Task 3', completed: true },
  ]);

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';
  
    return () => {
        document.body.style.backgroundColor = null;
    };
  }, []);
  // Function to render tasks with completion status and toggle button
  const renderTasks = () => {
    return tasks.map(task => (
      <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
        <span>{task.task}</span>
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
      </div>
    ));
  };
 
  const sendAlerts = () => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    if (incompleteTasks.length > 0) {
      alert('Alert: There are incomplete tasks!');
    } else {
      alert('All tasks are completed!');
    }
  };

  return (
    <div className="timesheet">
      <h2>Task Timesheet</h2>
      <div className="task-list">
        {renderTasks()}
      </div>
      <button onClick={sendAlerts}>Send Alerts</button>
    </div>
  );
};

export default Timesheet;
