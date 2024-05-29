import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Leave() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [status, setStatus] = useState(""); 
  const [leave_type, setLeaveType] = useState("");
  const [employee_id, setEmployeeID] = useState("");
  const [start_date, setStart] = useState("");
  const [end_date, setEnd] = useState("");
  const [lev_reason, setLevReason] = useState("");
  const [lev_approve, setLevApprove] = useState("");

  const navigate = useNavigate(); 
      const send  = async (e) => {
            e.preventDefault();
            try {
                const response = await Axios.post('http://localhost:3015/unland', {
                  leave_type: leave_type,
                    employee_id: employee_id,
                    start_date: start_date,
                    end_date: end_date,
                    lev_reason: lev_reason,
                    lev_approve: lev_approve,
              }); 
              if(response.data[0]) {
                window.alert("Account created successfully");
                navigate('/leaveinfo');
                return;
            } 
             else {
                setStatus(response.data)
                window.alert("Your account has already been created."); 
                return; 
          }
        }
             catch (error) {
              console.error('Error creating account:', error);
              alert("An error occurred, please try again later");
            }
          }; 
          useEffect(() => { 
            document.body.style.backgroundColor = 'white';
        
            return () => {
                document.body.style.backgroundColor = null;
            };
        }, []);
  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <form className="leave-form">
        {/* <label htmlFor="approver">Leave type by</label>
          <input type="text" placeholder="Enter your leave approver name"   required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect" /> */}

<label style={{marginLeft:"20px"}} htmlFor="employee-id">Leave type</label>
<select  required onChange={(e) => setLeaveType(e.target.value)} className="collect">

         <option    value="">Select leave</option>
         <option    value="Sick leave">Sick leave</option>
         <option   value='Casual leave'>Casual leave</option>
         <option   value='Paid leave'>Paid leave</option>
         </select> 
          <label  style={{marginLeft:"20px"}}htmlFor="employee-id">Employee ID</label>
          <input required type="text" placeholder="Enter your ID"     onChange={(e) => setEmployeeID(e.target.value)} id="employee-id" className="collect" />

          <label  style={{marginLeft:"20px"}}htmlFor="start-date">Leave start date</label>
          <input type="date"   onChange={(e) => setStart(e.target.value)} required id="start-date" className="collect" />

          <label  style={{marginLeft:"20px"}}htmlFor="end-date">Leave end date</label>
          <input type="date" onChange={(e) => setEnd(e.target.value)} required id="end-date" className="collect" />

          <label  style={{marginLeft:"20px"}}htmlFor="leave-reason">Leave Reason</label>
          <input type="text" placeholder="Enter leave reason" required   onChange={(e) => setLevReason(e.target.value)} id="leave-reason" className="collect" />

          <label  style={{marginLeft:"20px"}}htmlFor="approver">Leave Approved by</label>
          <input type="text" placeholder="Enter your leave approver name"   required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect" />
          
          <button type="submit" onClick={send} className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Leave;





























