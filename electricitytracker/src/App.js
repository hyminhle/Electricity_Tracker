import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faChartLine, 
  faMap, 
  faCalendar, 
  faFileAlt, 
  faCog,
  faTable
} from '@fortawesome/free-solid-svg-icons';
import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const renderContent = () => {
    switch(currentTab) {
      case 'graph':
        return <FileUpload />;
      case 'dashboard':
      default:
        return (
          <>
            <div className="content-grid">
              <div className="graph-section">
                <h2>Graph</h2>
              </div>
              
              <div className="map-section">
                <h2>Map</h2>
              </div>
              
              <div className="calendar-section">
                <h2>Calendar</h2>
              </div>
              
              <div className="report-section">
                <h2>Report</h2>
              </div>
            </div>

            <div className="metrics-panel">
              <div className="alert-box">
                <h3>Alert - 10/9/24</h3>
                <p>Detected Outlier Data</p>
                <button>Review</button>
              </div>

              <div className="metrics-box">
                <h3>Today's Metrics</h3>
                <div className="pie-chart">
                </div>
                <div className="metrics-data">
                  <p>Daily Avg: 30 kWh</p>
                  <p>Monthly: 900 kWh</p>
                  <p>Hourly Cost: 15 cents</p>
                  <p>Monthly Cost: 243$</p>
                  <p>Emission: 0.85 lbs CO2</p>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <FontAwesomeIcon icon={faTable} size="2x" />
        </div>
        <nav className="nav-links">
          <button 
            onClick={() => setCurrentTab('dashboard')} 
            className={currentTab === 'dashboard' ? 'active' : ''}
            title="Dashboard"
          >
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button 
            onClick={() => setCurrentTab('graph')} 
            className={currentTab === 'graph' ? 'active' : ''}
            title="Graph"
          >
            <FontAwesomeIcon icon={faChartLine} />
          </button>
          <button 
            onClick={() => setCurrentTab('map')} 
            className={currentTab === 'map' ? 'active' : ''}
            title="Map"
          >
            <FontAwesomeIcon icon={faMap} />
          </button>
          <button 
            onClick={() => setCurrentTab('calendar')} 
            className={currentTab === 'calendar' ? 'active' : ''}
            title="Calendar"
          >
            <FontAwesomeIcon icon={faCalendar} />
          </button>
          <button 
            onClick={() => setCurrentTab('report')} 
            className={currentTab === 'report' ? 'active' : ''}
            title="Report"
          >
            <FontAwesomeIcon icon={faFileAlt} />
          </button>
          <button 
            onClick={() => setCurrentTab('settings')} 
            className={currentTab === 'settings' ? 'active' : ''}
            title="Settings"
          >
            <FontAwesomeIcon icon={faCog} />
          </button>
        </nav>
      </div>

      <main className="main-content">
        <header className="header">
          <h1>Energy Tracker</h1>
          <div className="alert-icon">!</div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;