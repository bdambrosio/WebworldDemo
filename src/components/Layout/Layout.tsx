import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 