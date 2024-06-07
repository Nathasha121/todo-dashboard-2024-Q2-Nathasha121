import React from 'react';
import { FaBell, FaChevronDown, FaTimes } from 'react-icons/fa';
import './Dashboard.css';
import profilePic from './profilepic.jpg';
import Task from './Task';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='header'>
        <h1 className='headline-name'>Dashboard</h1>
        <div className='header-right'>
          <FaBell className='icon bell-icon' />
          <img
            src={profilePic}
            alt='Profile'
            className='profile-photo'
          />
          <FaChevronDown className='icon arrow-icon' />
        </div>
      </div>

      <br />

      <div className='Welcome'>
        <h1 className='Wmessage'>Welcome back, John Doe</h1>
        <button className='close-button'><FaTimes /></button>
        <p className='wphara'>The end of the year is coming. Are you planning your performance interview? You can do this super efficiently with Acmy</p>
        <a href="/information" className="info-link">Look here for information</a>
      </div>

  
      <div className="main-content">
        <Task />
      </div>
    </div>
  );
}

export default Dashboard;
