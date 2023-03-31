// use "rfce" short cut to create the function that will also export the function properly
import React from 'react';
import Employees from '../components/Employees';
import Tasks from '../components/Tasks';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <>
     
      <div className="dashboard-container">
        <div className="nav-bar-container">
          <Navbar />
        </div>
        <div className="tasks-container">
          <Tasks />
        </div>
        <div className="employees-container">
          <Employees />
        </div>

      </div>
    </>
    
  )
}

export default Dashboard