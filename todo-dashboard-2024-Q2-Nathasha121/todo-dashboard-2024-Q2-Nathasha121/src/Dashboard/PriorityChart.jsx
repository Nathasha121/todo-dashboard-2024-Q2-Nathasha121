import React from 'react';
import ChartComponent from './ChartComponent';
import './PriorityChart.css'; 

const PriorityChart = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available.</div>;
  }

  const countByPriority = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(countByPriority);
  const data = Object.values(countByPriority);

  const chartData = {
    labels: labels,
    data: data,
  };

  return (
    <div className="priority-chart">
      <h2>Tasks Priorities</h2>
      <ChartComponent data={chartData} />
      <div className="label">
        {labels.map((label, index) => (
          <div key={index} className="label-item">
            <div className="label-dot" style={{ backgroundColor: getPriorityColor(label) }}></div>
            <span className="priority-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'low':
      return '#2F80ED';
    case 'medium':
      return '#F2C94C';
    case 'high':
      return '#EB5757';
    default:
      return 'black';
  }
};

export default PriorityChart;
