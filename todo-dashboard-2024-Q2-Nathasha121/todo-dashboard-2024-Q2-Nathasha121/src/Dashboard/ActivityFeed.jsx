import React from 'react';
import profilePic from './profilepic.jpg'; 
import './ActivityFeed.css';

const activities = [
  { id: 1, message: 'Kushan Charuka created Contract #00124 need john Begie s signatue.', date: '2024-06-07', time: '10:00 AM' },
  { id: 2, message: 'lorem ipsu, dolar sit amet, consecter adipiscing eliit. Maecenas pretium neque.', date: '2024-06-06', time: '2:15 PM' },
  { id: 3, message: 'lorem ipsu, dolar sit amet, consecter adipiscing eliit. Maecenas pretium neque..', date: '2024-06-05', time: '6:30 PM' },
 ];

const ActivityFeed = () => {
  return (
    <div className="activity-feed-container">
      <div className="activity-feed">
        <h2>Activity Feed</h2>
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <img src={profilePic} alt="Profile" className="profile-photo" />
            <div className="activity-details">
              <p>{activity.message}</p>
              <span>{activity.date} at {activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
