import React from 'react'
import { useNavigate } from 'react-router'
import './_register.scss'

function Success() {
  const navigate = useNavigate()
  return (
    <div className='success'>
      <div className='box flex flex-col'>
        <div className='happy-img flex'>
          <img src='/images/pages/success.png' alt='img' className='img-1'/>
          <img src='/images/pages/person-4.png' alt='img' className='img-2'/>
        </div>
        <div className='text'>
          <p className='text-1 flex flex-col'>
            <p>Congratulations</p>
            <p>you have successfully Registered!</p>
          </p>
          <p className='text-2 flex flex-col'>
            <p>Yes, it was easy and you did it!</p>
            <p className='check flex items-center'>
              <span>check your mail box for next step</span>
              <img src='/images/pages/emoji.png' alt='img'/>
            </p>
          </p>
          <button className='btn' onClick={() => navigate('/')}>Back</button>
        </div>
        <img src='/images/body/star.png' alt='img' className='star-1'/>
        <img src='/images/body/star.png' alt='img' className='star-2'/>
        <img src='/images/home/star-1.png' alt='img' className='star-3'/>
      </div>
    </div>
  )
}

export default Success