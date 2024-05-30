import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditingRate from "./EditingRate";
import "./Table.css"
function ManagerSideDisplay(){
        const [employeeData,setEmployeeData] = useState([]);
        const [display ,setdisplay] = useState('');
        useEffect(()=>{
            getdata();
        })
        async function getdata(){
           const data = await axios.get(`https://time-shipping-backend.vercel.app/TimeSheet/ManagerSideDisplay?ManagerEmail=${localStorage.getItem('managerEmail')}&token=${localStorage.getItem('token')}`)
          
           setEmployeeData(data.data.display)
        }
        function EditForm(Name,Email,datee,TimeRange,Project,Rated){
          let EditDisplay =  document.getElementById('EmployeesDetail').style.display = "none";
               setdisplay(()=>{
                return <EditingRate name={Name} email={Email} date={datee} timeRange={TimeRange} projectName={Project} taskDescription="crud operation" rated={Rated} EditDisplay = {EditDisplay} setdisplay = {setdisplay}/>
   f            })
        }
        async function DeletedRecord(Name,Email,datee,TimeRange,Project,Rated){
            const data = await axios.delete(`https://time-shipping-backend.vercel.app/TimeSheet/deleteReport?ManagerEmail=${localStorage.getItem('managerEmail')}&email=${Email}&projectName=${Project}&timeRange=${TimeRange}&name=${Name}&taskDiscription=${['crud application']}&date=${datee}&rated=${Rated}&token=${localStorage.getItem('token')}`)
            alert(data.data)
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
                    <th>Action</th>
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
                        <td>
                            <button className="editbtn" onClick={()=>EditForm(elem.name,elem.employeeEmail,elem.date,elem.timeRange,elem.projectName,elem.rated)}>Edit</button>
                            <button className="deletebtn" onClick={()=>DeletedRecord(elem.name,elem.employeeEmail,elem.date,elem.timeRange,elem.projectName,elem.rated)}>Delete</button>
                        </td>
                       
                       
                    </tr>
                   )
                })}
            </table>
            {display}
            </center>
            </>
        )
    
}
export default ManagerSideDisplay;