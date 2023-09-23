import React from 'react'
import './_policy.scss'

const Policy = () => {
  return (
    <div className='policy bg-policy flex justify-around max-md:flex-col'>
      <div className='container-1'>
        <div className='heading'>
          <div className='heading-1'>
           <p>Privacy Policy and</p>
           <p className='terms'>Terms</p>
          </div>
          <p className='update'>Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it's our aim to always take of our participant
          </p>
        </div>

        <div className='desc'>
          <p className='text'>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
          </p>
          <p className='title'>Licensing Policy</p>
          <p className='terms'>Here are terms of our Standard License:</p>
          <div className='list'>
            <img src='/images/policy/list.png' alt='img'/>
            The Standard License grants you a non-exclusive right to navigate and register for our event
          </div>
          <div className='list'>
            <img src='/images/policy/list.png' alt='img'/>
            You are licensed to use the item available at any free source sites, for your project developement
          </div>
          <div className='btn-center'><button className='btn'>Read More</button></div>
        </div>

        <img src='/images/home/star-1.png' alt='img' className='star-1'/>
        <img src='/images/body/star.png' alt='img' className='star-2'/>
        <img src='/images/body/star.png' alt='img' className='star-3'/>
      </div>

      <div className='container-2'>
        <img src='/images/policy/lock.png' alt='img'/>
        <img src='/images/policy/person.png' alt='img' className='img-2'/>
        <img src='/images/home/star.png' alt='img' className='star-4'/>
        <img src='/images/home/star-1.png' alt='img' className='star-5'/>
        <img src='/images/body/star.png' alt='img' className='star-6'/>
        <img src='/images/home/star.png' alt='img' className='star-7'/>
      </div>
    </div>
  )
}

export default Policy