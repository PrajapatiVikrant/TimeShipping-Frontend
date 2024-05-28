import axios from "axios";
import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import './Login.css'
function Login(){
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [EmployeeId_or_ManagerId,setEmployeeId_or_ManagerId]=useState('');
    const navigate = useNavigate('');
    async function SignIn(){
        const data = await axios.get(`https://time-shipping-backend.vercel.app/TimeSheet/Login?email=${email}&EmployeeId_or_ManagerId=${EmployeeId_or_ManagerId}&password=${password}`)
       
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
                <h1>Login Form</h1>
       <div>
       <input  type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" /><br />
       <input  type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" /><br />
       <input  type="password" value={EmployeeId_or_ManagerId} onChange={(e)=>setEmployeeId_or_ManagerId(e.target.value)} placeholder="Enter your employee/manager id" /><br />
        <button className="LoginBtn" onClick={SignIn}>Login</button>
        <p>If you have not account?<Link to='/Signup'>Signup</Link></p>
       </div>
       </center>
       </div>
    )
}
export default Login;