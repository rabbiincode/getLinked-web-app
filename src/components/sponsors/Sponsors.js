import React from 'react'
import './_sponsors.scss'

const Sponsors = () => {
  return (
    <div className='sponsors bg-sponsors'>
      <div className='heading'>
        <p className='title'>Partners and Sponsors</p>
        <p className='desc'>
          Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
        </p>
      </div>

      <div className='container-1'>
        <div className='company-logo first-row'>
          <div className='box'>
            <img src='/images/partners/logo-1.png' alt='img' className='img-1'/>
          </div>
          <div className='vertical-divider'></div>
          <div className='box'>
            <img src='/images/partners/logo-2.png' alt='img' className='img-2'/>
          </div>
          <div className='vertical-divider'></div>
          <div className='box'>
            <img src='/images/partners/logo-3.png' alt='img' className='img-3'/>
          </div>
        </div>
        <div className='company-logo'>
          <div className='box no-border'>
            <img src='/images/partners/logo-4.png' alt='img' className='img-4'/>
          </div>
          <div className='vertical-divider'></div>
          <div className='box no-border'>
            <img src='/images/partners/logo-5.png' alt='img' className='img-5'/>
          </div>
          <div className='vertical-divider'></div>
          <div className='box no-border'>
            <div className='design'>
              <img src='/images/partners/logo-6.png' alt='img' className='img-6'/>
              <p className='studios'>Design Studios</p>
            </div>
          </div>
        </div>

        <img src='/images/body/star.png' alt='img' className='star-1'/>
        <img src='/images/body/star.png' alt='img' className='star-2'/>
        <img src='/images/home/star.png' alt='img' className='star-3'/>
      </div>
    </div>
  )
}

export default Sponsors