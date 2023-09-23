import React from 'react'
import './_rewards.scss'

const Rewards = () => {
  return (
    <div className='rewards bg-rewards flex items-center justify-between max-md:flex-col'>
      <img src='/images/body/star.png' alt='img' className='img-top'/>
      <div className='trophy'>
        <img src='/images/body/trophy.png' alt='img' className='trophy-img'/>
        <img src='/images/home/star.png' alt='img' className='star'/>
      </div>

      <div className='rewards-container flex flex-col'>
        <div className='heading'>
          <div className='heading-1'>
            <p>Prizes and</p>
            <p className='reward'>Rewards</p>
            <p className='desc'>Highlight of the prizes or rewards for winners and for participants</p>
          </div>
        </div>
        <div className='rewards-prizes flex items-center'>
          <div className='box'>
            <img src='/images/body/silver-medal.png' alt='img' className='img-1'/>
            <p>2nd</p>
            <p className='runner'>Runner</p>
            <p className='amount'>300,000</p>
          </div>
          <div className='box first'>
            <div className='img-2'>
            <img src='/images/body/gold-medal.png' alt='img'/>
            </div>
            <p>Ist</p>
            <p className='runner'>Runner</p>
            <p className='first-amount'>400,000</p>
          </div>
          <div className='box'>
            <img src='/images/body/bronze-medal.png' alt='img' className='img-1'/>
            <p>3rd</p>
            <p className='runner'>Runner</p>
            <p className='amount'>150,000</p>
          </div>

          <img src='/images/home/star.png' alt='img' className='star-2'/>
          <img src='/images/home/star.png' alt='img' className='star-3'/>
          <img src='/images/home/star-1.png' alt='img' className='star-4'/>
        </div>
      </div>
    </div>
  )
}

export default Rewards