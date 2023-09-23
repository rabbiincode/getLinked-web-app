import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Intro from '../intro/Intro'
import Guidelines from '../guidelines/Guidelines'
import Criteria from '../criteria/Criteria'
import Faqs from '../faqs/Faqs'
import Timeline from '../timeline/Timeline'
import Rewards from '../rewards/Rewards'
import Sponsors from '../sponsors/Sponsors'
import Policy from '../policy/Policy'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router'
import './_home.scss'
const Home = () => {
  const navigate = useNavigate()
  const [secs, setSecs] = useState('')
  const [mins, setMins] = useState('')
  const [hours, setHours] = useState('')
  const goto = (page) => {
    const targetElement = document.getElementById(page);
    // Scroll to the target element / Page
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const getFormattedTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    setSecs(seconds)
    setMins(minutes)
    setHours(hours)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getFormattedTime()
    }, 1000)

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='home'>
      <Header goto={goto}/>

      <div className='bg-home'>
        <div className='ignite'>
          <img src='/images/home/star.png' alt='img' className='img-1'/>
          <span className='heading flex flex-col items-end'>
            Igniting a Revolution in HR Innovation
            <img src='/images/home/line.png' alt='img' className='img-2'/>
          </span>
        </div>

        <div className='landing-page flex max-md:flex-col'>
          <div className='home-text flex flex-col'>
            <span className='flex items-start'>
              <span className='get-linked flex flex-col items-end'>
                <img src='/images/header/logo.png' alt='img'/>
                <span>getlinked Tech</span>
              </span>
            </span>
            <span className='hackathon flex'>
              Hackathon<span className='number'> 1.0</span>
              <img src='/images/home/chain.png' alt='img'/>
              <img src='/images/home/fire.png' alt='img'/>
            </span>
            <span className='participate'>
              Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
            </span>
            <button className='btn' onClick={() => navigate('/register')}>Register</button>
            <div className='time'>
              <span>{hours}<small>H</small></span>
              <span>{mins}<small>M</small></span>
              <span>{secs}<small>S</small></span>
            </div>
            <img src='/images/home/star-1.png' alt='img' className='star-1'/>
            <img src='/images/home/star-1.png' alt='img' className='star-2'/>
          </div>

          <div className='person'>
            <img src='/images/home/person.png' alt='img' className='img-1'/>
            <span>
              <img src='/images/home/galaxy.png' alt='img' className='galaxy'/>
            </span>
          </div>
        </div>
      </div>

      <Intro/>
      <Guidelines/>
      <section id="criteria"><Criteria/></section>
      <section id="faqs"><Faqs/></section>
      <section id="timeline"><Timeline/></section>
      <Rewards/>
      <Sponsors/>
      <Policy/>
      <Footer/>
    </div>
  )
}

export default Home