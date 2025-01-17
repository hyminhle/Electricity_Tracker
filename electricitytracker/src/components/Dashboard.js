import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Usage</h3>
          <p className="stat-value">2,345 kWh</p>
          <p className="stat-change">+12% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Total Cost</h3>
          <p className="stat-value">$345.67</p>
          <p className="stat-change">+8% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Peak Usage Time</h3>
          <p className="stat-value">2-4 PM</p>
          <p className="stat-change">Same as last month</p>
        </div>
      </div>
      
      <div className="usage-chart">
        {/* Chart component will go here */}
      </div>
    </div>
  );
}

export default Dashboard; 