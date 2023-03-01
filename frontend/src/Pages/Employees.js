import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import EmployeesBody from '../Components/Employees/EmployeesBody'

function Employees() {
  return (
    <div>
      <SideBar/>
      <NavBar/>
      <div className='content bg-slate-900'>
      <EmployeesBody/>
      </div>
    </div>
  )
}

export default Employees