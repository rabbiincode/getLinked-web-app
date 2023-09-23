import React from 'react'
import './_intro.scss'

const Intro = () => {
  return (
    <div className='intro flex items-center justify-between max-md:flex-col'>
      <div className='idea'>
        <img src='/images/body/star.png' alt='img' className='img-2'/>
        <img src='/images/body/idea.png' alt='img' className='img-1'/>
        <img src='/images/body/arrow.png' alt='img' className='img-3'/>
      </div>
      <div className='intro-content'>
        <p className='flex items-center justify-between'>
          <p className='title flex flex-col'>
            <span>Introduction to getlinked</span>
            <span className='tech'>tech Hackathon 1.0</span>
          </p>
          <img src='/images/body/star.png' alt='img'/>
        </p>
        <p className='text'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a
          coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
      </div>
    </div>
  )
}

export default Intro