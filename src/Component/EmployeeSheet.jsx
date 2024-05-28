import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
function EmployeeSheet(){
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [timeRange,settimeRange] = useState('');
    const [projectName,setprojectName] = useState('');
    const [taskDescription,settaskDescription] = useState('');
    const [managerEmail,setmanagerEmail] = useState('');
    const navigate = useNavigate();
    
    async function SendData(){
        const data =  await axios.post(`https://time-shipping-backend.vercel.app/TimeSheet/Senddata?ManagerEmail=${managerEmail}&email=${email}&projectName=${projectName}&timeRange=${timeRange}&name=${name}&taskDiscription=${taskDescription}&token=${localStorage.getItem('token')}`);
        console.log(data)
        alert(data.data)
        navigate('/EmployeeSideDisplay')
       
    }
    return (
        <>
        <center>
            <h1>EmployeeSheet</h1>
       <div>
          <input type="text" value={name} onChange = {(e)=>setname(e.target.value)}  placeholder="Enter your name"/><br />
          <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email"/><br />
          <input type="text" value={timeRange} onChange={(e)=>settimeRange(e.target.value)} placeholder="Enter your time range"/><br />
          <input type="text" value={projectName} onChange={(e)=>setprojectName(e.target.value)} placeholder="Enter project name"/><br />
          <input type="text" value={taskDescription} onChange={(e)=>settaskDescription(e.target.value)} placeholder="Enter your task description"/><br />
          <input type="email" value={managerEmail} onChange={(e)=>setmanagerEmail(e.target.value)} placeholder="Enter your manager email" />
         <br />
         <button className="LoginBtn" onClick={SendData}>Submit</button><br />
         <Link to='/EmployeeSideDisplay'><button className="LoginBtn">Sent data</button></Link>
        </div>
        </center>
        </>
    )
}
export default EmployeeSheet;