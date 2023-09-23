import React from 'react'
import './_guidelines.scss'

const Guidelines = () => {
  return (
    <div className='guidelines bg-guidelines flex items-center justify-between'>
      <div className='guidelines-content'>
        <p>Rules and</p>
        <p className='tech'>Guidelines</p>
        <p className='text'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a 
          design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
        <img src='/images/home/star.png' alt='img' className='star'/>
        <img src='/images/home/star-1.png' alt='img' className='star-1'/>
      </div>
      <div className='rules'>
        <img src='/images/body/guideline.png' alt='img'/>
      </div>
    </div>
  )
}

export default Guidelines