
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Status = () => {
  const [count, setTotalCount] = useState(0);
  const [comments, setComments] = useState([]);  
  const [maleCount, setMaleCount] = useState(0);  
  const [gender, setGender] = useState([]);  
  const [femaleCount, setFemaleCount] = useState(0);  
  const [fgender, setFGender] = useState([]);  
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTotalCount() {
      try {
        const response = await axios.get('http://localhost:3016/count');
        setTotalCount(response.data.count); 
        setComments(response.data.comments);  
        console.log("TotalCount: ","Data has been display the total employee");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotalCount();
  }, []); 
  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await axios.get('http://localhost:3016/countemployees');
        setMaleCount(response.data.maleCount);
        setGender(response.data.gender);
        console.log("MaleCount:", response.data.count); // Log the updated value
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchCount();
  }, []);
  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await axios.get('http://localhost:3016/femaleCount');
        setFemaleCount(response.data.femaleCount);
        setFGender(response.data.fgender);
        console.log("femaleCount:", response.data.femaleCount);
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchCount();
  }, []);
  
  

  return (
    <div className='ait'>
      <div className="leave-summary1">
        <div className="summary-card" style={{ maxWidth: "230px", gap: "20px" }}>
          <h3>{count !== null ? count : "Loading..."}</h3>
          <p>Total Employees</p>
        </div>
        <div className="summary-card2" style={{ maxWidth: "230px" }}>
          <h3>{count !== null ? count : "Loading..."}</h3>
          <p>New Employees</p>
        </div>
        <div className="summary-card3" style={{ maxWidth: "230px" }}>
          <h3> {gender.map((send) =>( 
          <p key={send.id}>
            <h3>{send.maleCount}</h3>
          </p>
          ))}</h3>
          <p>Male</p>
        </div>
        <div className="summary-card4" style={{ maxWidth: "230px" }}>
            <h3>{fgender.map((design)=>(
              <p key={design.id}>
              <h3>{design.femaleCount}</h3>
              </p>
            ))}</h3> 
          <p>Female</p>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Status;
 
