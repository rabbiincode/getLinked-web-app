import React from 'react'
import './_sidebar.scss'
import { useNavigate } from 'react-router'

const Sidebar = ({toggleSidebar}) => {
  const navigate = useNavigate()
  const CloseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" stroke="url(#paint0_linear_181_74)" stroke-width="5" fill="none"/>
      <image x="32" y="32" width="35" height="35" xlinkHref="/images/pages/close.png" />
      <defs>
        <linearGradient id="paint0_linear_181_74" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#903AFF"/>
          <stop offset="1" stop-color="#FF26B9"/>
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <div className='sidebar md:hidden'>
      <div className='close' onClick={toggleSidebar}>{CloseIcon}</div>
      <div className='content flex flex-col gap-14'>
        <span>Timeline</span>
        <span>Overview</span>
        <span>Faqs</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
        <button className='btn' onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  )
}

export default Sidebar