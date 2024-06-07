import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import PriorityChart from './PriorityChart';
import ActivityFeed from './ActivityFeed';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMarkAsDone = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="task-container">
      <div className="task-section">
        <TaskList tasks={currentTasks} handleMarkAsDone={handleMarkAsDone} />
        <ul className="pagination">
          {Array.from({ length: Math.ceil(tasks.length / tasksPerPage) }, (_, index) => (
            <li key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-section">
        <PriorityChart tasks={tasks} />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Task;
