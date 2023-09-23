import React from 'react'
import './_footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container-1 flex justify-between max-md:flex-col'>
        <div className='first'>
          <img src='/images/header/name.png' alt='img'/>
          <p className='text'>
            getlinked Tech Hackathon is a technology innovation program established by a group of
            organizations with the aim of showcasing young and talented individuals in the field of technology
          </p>
          <p className='terms'>
            <span>Terms of Use</span>
            <span className='line'>|</span>
            <span>Privacy Policy</span>
          </p>
        </div>

        <div className='second'>
          <p className='color'>Useful Links</p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className='icons'>
            <span className='color'>Follow us</span>
            <img src='/images/footer/instagram.png' alt='img'/>
            <img src='/images/footer/twitter.png' alt='img'/>
            <img src='/images/footer/facebook.png' alt='img'/>
            <img src='/images/footer/linkedin.png' alt='img'/>
          </div>
        </div>

        <div className='third'>
          <p className='color'>Contact Us</p>
          <div className='list align'>
            <img src='/images/footer/call.png' alt='img'/>
            <span>+234 679 81819</span>
          </div>
          <div className='list'>
            <img src='/images/footer/location.png' alt='img' className='list-img'/>
            <div>
              <p>27,Alara Street</p>
              <p>Yaba 100012</p>
              <p>Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <div className='rights'>
        <img src='/images/body/star.png' alt='img'/>
        All rights reserved. &copy; getlinked Ltd.
      </div>

      <img src='/images/home/star.png' alt='img' className='img-1'/>
      <img src='/images/home/star.png' alt='img' className='img-2'/>
    </div>
  )
}

export default Footer