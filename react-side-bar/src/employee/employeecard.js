import React, { useState } from 'react'; 
import './employee.css'; 

const EmployeeCard = ({ employee }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };
   
  return (
    <div className="employee-card">
      <img src={employee.image} alt={employee.name} className="profile-image" />
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p>ID: {employee.id}</p>
      <p>Join Date: {employee.joinDate}</p>
      <p>Contract:  {employee.contract}</p>
      <div className="buttons"> 
      <button   style={{ backgroundColor: '#d1c2b6', color: 'black' }}><a href="tel:+918940513367">Call </a></button>
        <button style={{ backgroundColor: 'black', color: 'white' }}>Chat</button>
        <button
          style={{ backgroundColor: 'black', color: 'white' }}
          onClick={handleDetailsClick}
        >  Details
        </button>
      </div> 
      {showDetails && (
        <div className="overlay" style={{backgroundColor:"white"}}>
          <div className="details-form"> 
            <p>Employee Details Form</p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <button onClick={() => setShowDetails(true)}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;




 

 