import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
function EditingRate(props) {
    const [rate,setrate] = useState(props.rated);
    const navigate = useNavigate();
    async function EditRate(){
        if(rate > 5){
            alert('value should be lessthen or equal 5')
        }else{
      const data =  await axios.put(`https://time-shipping-backend.vercel.app/TimeSheet/EditRate?ManagerEmail=${localStorage.getItem('managerEmail')}&EmployeeEmail=${props.email}&projectName=${props.projectName}&rated=${rate}&token=${localStorage.getItem('token')}`);
      if(data.data === 'Rate has edited'){
        console.log('I am working in right')
        alert(data.data)
       props.EditDisplay.display = "block"
       props.setdisplay('');
      }else{
        alert(data.data)
      }
     
    }
    }
    return (
      <center>
        <h1>Edit Rate</h1>
        <div>
          <input type="text" value={props.name} readOnly /><br />
          <input type="email" value={props.email} readOnly/><br />
          <input type="text" value={props.date} readOnly/><br />
          <input type="text" value={props.timeRange} readOnly/><br />
          <input type="text" value={props.projectName} readOnly/><br />
          <input type="text" value={props.taskDescription} readOnly/><br />
          <input type="text" value={rate} onChange = {(e)=>setrate(e.target.value)} placeholder="Edit rate"/><br />
          <button className="Editbtn" onClick={EditRate}>Edit</button>
        </div>
        </center>
    )
}
export default EditingRate;