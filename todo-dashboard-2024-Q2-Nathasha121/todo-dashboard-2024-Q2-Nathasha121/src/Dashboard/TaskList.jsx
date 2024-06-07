import React, { useState } from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa';
import './TaskList.css';

const TaskList = ({ tasks, handleMarkAsDone }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8;
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'HIGH':
        return { color: '#EB5757', backgroundColor: '#eb575740' };
      case 'MEDIUM':
        return { color: '#F2C94C', backgroundColor: '#f2c84c3b' };
      case 'LOW':
        return { color: '#2F80ED', backgroundColor: '#2f81ed35' };
      default:
        return { color: 'black', backgroundColor: 'white' };
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  if (!tasks || tasks.length === 0) {
    return <div>No tasks available.</div>;
  }

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Task Name</th>
            <th>Created By</th>
            <th>Priority</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map(task => (
            <tr key={task.id}>
              <td className="status-cell">
                <div className={task.completed ? 'status-completed' : 'status-inprogress'}>
                  {task.completed ? <FaCheck /> : <FaMinus />}
                </div>
              </td>
              <td>
                {task.todo} <br />
                {!task.completed && <span style={{ color: '#EB5757', cursor: 'pointer' }} onClick={() => handleMarkAsDone(task.id)}>Mark as done</span>}
              </td>
              <td>{task.createdBy}</td>
              <td>
                <span className="priority" style={{ ...getPriorityStyle(task.priority), padding: '4px 6px', borderRadius: '15px' }}>
                  {task.priority}
                </span>
              </td>
              <td className="date-cell">{formatDate(task.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="pagination">
          <ul>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
            {Array.from({ length: totalPages > 3 ? 3 : totalPages }, (_, index) => index + 1).map(page => (
              <li key={page}>
                <button onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>
                  {page}
                </button>
              </li>
            ))}
            {totalPages > 3 && <li>...</li>}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
