import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/demo', label: 'Live Demo' },
    { path: '/pitch', label: 'For Partners' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-brand">
        <Link to="/">
          <h1>ImprovAI</h1>
          <span>AI Characters in Living Stories</span>
        </Link>
      </div>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 