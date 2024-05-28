import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function EmployeeSideDisplay(){
    const [employeeData,setEmployeeData] = useState([]);
    const [display ,setdisplay] = useState('');
    useEffect(()=>{
        getdata();
    })
    async function getdata(){
       const data = await axios.get(`https://time-shipping-backend.vercel.app/TimeSheet/EmployeeSideDisplay?ManagerEmail=${localStorage.getItem('managerEmail')}&email=${localStorage.getItem('employeeEmail')}&token=${localStorage.getItem('token')}`)
      
       setEmployeeData(data.data.display)
    }
    
    
    return (
        <>
        <center>
        <table id="EmployeesDetail">
            <tr>
                <th>Name</th>
                <th>employeeEmail</th>
                <th>Date</th>
                <th>TimeRange</th>
                <th>projectName</th>
                {/* <th>taskDescription</th> */}
                <th>Rate out of 5</th>
              
            </tr>
            {employeeData.map((elem)=>{
               return (
                <tr>
                    <td>{elem.name}</td>
                    <td>{elem.employeeEmail}</td>
                    <td>{elem.date}</td>
                    <td>{elem.timeRange}</td>
                    <td>{elem.projectName}</td>
                    <td>{elem.rated}</td>
                </tr>
               )
            })}
        </table>
        <Link to='/TimeSheetForm'><button className="LoginBtn">Go back</button></Link>
        </center>
        </>
    )
}
export default EmployeeSideDisplay;