import React from 'react'
import SideBar from '../Components/SideBar'
import MainContent from '../Components/MainContent'
import '../styles/DashBoard.css'

const DashBoard = () => {
  return (
    <div className='dashboard'>
        <SideBar />
        <div className='mainContent'>
            <MainContent />
        </div>
    </div>
  )
}

export default DashBoard
