 




import React, { useState, useEffect } from 'react';
import './styles.css';
import Sidebar from '../components/Sidebar';
import plus from '../assets/plus.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './attendance.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Attendance = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [employees, setEmployees] = useState([]); 
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await Axios.get('http://localhost:3015/getting');
        setEmployees(response.data.attendance);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchRecords();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
 
 
    useEffect(() => { 
        document.body.style.backgroundColor = 'white';
  
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);
 

  const Leave = () => {
    navigate('/attenform');
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="leave-requests">
          <h2 className="test">Attendance</h2>
          <div className="leave-summary">
            <div className="summary-card">
              <h3>28</h3>
              <p>Office Employee</p>
            </div>
            <div className="summary-card2">
              <h3>08</h3>
              <p>Onsite Employee</p>
            </div>
            <div className="summary-card3">
              <h3>14</h3>
              <p>Total absent</p>
            </div>
            <div className="summary-card4">
              <h3>06</h3>
              <p>Total present</p>
            </div>
          </div>
          <div className="set">
          <h2 className="test1">Attendance details</h2>
            <div className="attendance-section">
              <div className="clock-in-out">
                <div className="clock">
                  <p>Time: {currentTime.toLocaleTimeString()}</p>
                  <p>{currentTime.toDateString()}</p>
                </div>
              </div>
            </div>
            
            <button type="button" onClick={Leave} style={{backgroundColor:"black",color:"white",alignItems:"center",display:"flex",marginTop:"0px"}}>
              <img src={plus} alt="Apply Leave" height="20px" width="20px" style={{ marginLeft: "0px" }} />
              Attendance
            </button>
          </div>
          {error && <p>{error}</p>}
          <table>
            <thead>
              <tr>
                
                <th>Employee ID</th>
                <th>Employee position</th>
                <th>Check IN</th>
                <th>Check Out</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.employee}</td>
                  <td>{employee.checki}</td>
                  <td>{employee.checko}</td> 
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
