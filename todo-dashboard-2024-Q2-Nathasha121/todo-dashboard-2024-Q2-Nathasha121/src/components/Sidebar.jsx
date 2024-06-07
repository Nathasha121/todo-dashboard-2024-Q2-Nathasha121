import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const menuItem = [
    {
      path: "/", 
      name: "Dashboard"
    }
  ];

  return (
    <div className="sidebar-wrapper">
      <div className="top_section">
        <h2 style={{ marginTop: '15px' }} className="Topic">
          Acmy Solution
        </h2>
      </div>
      <div className="Bottom">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={`menu-item-wrapper ${activeMenuItem === index ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(index)}
          >
            <NavLink 
              to={item.path} 
              className="link" 
              activeclassname="active" 
            >
              <div className="icon"><FaChartLine /></div>
              <div className="text">{item.name}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
