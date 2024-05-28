import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import './Login.css'
function Signup(){
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [EmployeeId_or_ManagerId,setEmployeeId_or_ManagerId] = useState('');
    const navigate = useNavigate();
    async function Register(){
        
        const data =await axios.post(`https://time-shipping-backend.vercel.app/TimeSheet/Signup?name=${name}&email=${email}&EmployeeId_or_ManagerId=${EmployeeId_or_ManagerId}&password=${password}`)
        if(data.data.message ==='/TimeSheetForm'){
            localStorage.setItem('employeeEmail',email)
            localStorage.setItem('token',data.data.token)
            navigate('/TimeSheetForm')
        }else if(data.data.message ==='/EmployeeDetail'){
            localStorage.setItem('managerEmail',email)
            localStorage.setItem('token',data.data.token)
            navigate('/ManagerSideDisplay')
        }else{
            alert(data.data.message);
        }
    }
    return(

        <div className="SignLoginForm">
            <center>
            <h1>Signup form</h1>
       <div>
        <input  type="name" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your name" /><br />
        <input  type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" /><br />
        <input  type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" /><br />
        <input  type="password" value={EmployeeId_or_ManagerId} onChange={(e)=>setEmployeeId_or_ManagerId(e.target.value)} placeholder="Enter your employee/manager id" /><br />
        <button className="LoginBtn" onClick={Register}>Signup</button>
       </div>
       </center>
       </div>
    )
}
export default Signup;