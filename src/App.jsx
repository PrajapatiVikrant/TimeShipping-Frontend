import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import EditingRate from './Component/EditingRate'
import EmployeeSheet from './Component/EmployeeSheet'
import EmployeeSideDisplay from './Component/EmployeeSideDisplay'
import Login from './Component/Login'
import ManagerSideDisplay from './Component/ManagerSideDisplay'
import Signup from './Component/Signup'

function App() {
  

  return (
    <div className="container">
   <Routes>
    <Route path='/' Component={Login}/>
    <Route path = '/Signup' Component={Signup}/>
    <Route path='/TimeSheetForm' Component={EmployeeSheet}/>
    <Route path='/ManagerSideDisplay' Component={ManagerSideDisplay}/>
    <Route path='/EmployeeSideDisplay' Component={EmployeeSideDisplay}/>
    <Route path='/EditRate' Component={EditingRate}/>
   </Routes>
   </div>
  )
}

export default App
