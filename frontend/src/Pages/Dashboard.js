import React from 'react'
import Sidebar from './Sidebar'
import MainScreen from './MainScreen'
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './Dashboard.css'
// import MainHeader from './MainHeader'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar/>
      <MainScreen/>

    </div>
  )
}

export default Dashboard