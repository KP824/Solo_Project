// use "rfce" short cut to create the function that will also export the function properly
import React from 'react';
import Employees from '../components/Employees';
import Tasks from '../components/Tasks';

function Dashboard() {
  return (
    <>
      <h3>Inside of dashboard</h3>
      
      <div className="dashboard-cont">
        <div className="tasks-cont">
          <Tasks />
        </div>
        <div className="employee-list">
          <Employees />
        </div>

      </div>
    </>
    
  )
}

export default Dashboard