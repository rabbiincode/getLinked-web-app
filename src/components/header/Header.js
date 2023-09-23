import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router'
import './_header.scss'

const Header = ({goto}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [toggle, setToggle] = useState(false)
  const toggleSidebar = () => setToggle(!toggle)
  const path = location.pathname === '/register' || location.pathname === '/contact'
  const gotoPage = (page) => path ? navigate('/') : goto(page) 

  if (toggle){
    return <Sidebar toggleSidebar={toggleSidebar}/>
  }

  return (
    <div className={`header flex items-center justify-between px-12 pt-8 pb-4 md:px-32 ${path ? 'remove' : 'bg-header'}`}>
      <img src='/images/header/name.png' alt='img'/>
      <div className='max-md:hidden flex items-center justify-between gap-32'>
        <div className='content flex gap-14'>
          <span  onClick={() => gotoPage('timeline')}>Timeline</span>
          <span onClick={() => gotoPage('criteria')}>Overview</span>
          <span onClick={() => gotoPage('faqs')}>Faqs</span>
          <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
        <button className={`btn ${location.pathname === '/register' && 'add-border'}`} 
          onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
      <div className='md:hidden cursor-pointer' onClick={toggleSidebar}>
        <img src='/images/header/navbar.png' alt='img'/>
      </div>
    </div>
  )
}

export default Header