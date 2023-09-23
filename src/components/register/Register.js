import React, { useState } from 'react'
import Header from '../header/Header'
import Success from './Success'
import axios from 'axios';
import './_register.scss'

const Register = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [formData, setFormData] = useState({
    teamName: '',
    phone: '',
    email: '',
    projectTopic: '',
    category: '',
    groupSize: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value })
  }

  const register = async (e) => {
    e.preventDefault()

    // Prepare the data to send to the API
    const requestData = {
      email: formData.email,
      phone_number: formData.phone,
      team_name: formData.teamName,
      group_size: formData.groupSize,
      project_topic: formData.projectTopic,
      category: formData.category,
      privacy_poclicy_accepted: true
    }
    setTimeout(() => {setRegistrationSuccess(true)}, 3000)

    try {
      // Make the Axios POST request
      console.log(requestData)
      const response = await axios.post('https://backend.getlinked.ai/hackathon/registration', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        // Registration successful, handle success here
        console.log('Registration successful!')
        setRegistrationSuccess(true)
      } else {
        // Handle registration errors
        console.error('Registration failed.')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='register bg-register flex items-center justify-around max-md:flex-col'>
      <div className='max-md:hidden'><Header/></div>
      <div className='register-1'>
        <img src='/images/pages/person-1.png' alt='img'/>
        <img src='/images/body/star.png' alt='img' className='star-1'/>
        <img src='/images/body/star.png' alt='img' className='star-2'/>
        <img src='/images/home/star-1.png' alt='img' className='star-3'/>
      </div>

      <div className='register-2'>
        <div className='heading'>
          <p className='title'>Register</p>
          <div className='desc'>
            <p>Be part of this movement!</p>
            <div className='walk flex items-center'>
              <img src='/images/pages/person-3.png' alt='img'/>
              <img src='/images/pages/person-2.png' alt='img'/>
            </div>
          </div>
          <p className='create'>CREATE YOUR ACCOUNT</p>
        </div>
        <form onSubmit={register}>
          <div className='fill'>
            <div className='input'>
              <label for="name">Team's Name</label>
              <input type="text" placeholder='Enter the name of your group' id="teamName" value={formData.teamName} onChange={handleChange}/>
            </div>
            <div className='input'>
              <label for="phone">Phone</label>
              <input type="text" placeholder='Enter your phone number' id="phone" value={formData.phone} onChange={handleChange}/>
            </div>
          </div>
          <div className='fill'>
            <div className='input'>
              <label for="email">Email</label>
              <input type="email" placeholder='Enter your email address' id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className='input'>
              <label for="topic">Project Topic</label>
              <input type="text" placeholder='What is your group project topic' id="projectTopic" value={formData.projectTopic} onChange={handleChange}/>
            </div>
          </div>
          <div className='fill fill-1'>
            <div className='input'>
              <label for="category">Category</label>
              <select id="category" name="categoriess" value={formData.category} onChange={handleChange}>
              <option value="" disabled selected hidden>Select your category</option>
                <option value="1">Mobile</option>
                <option value="2">Web</option>
                <option value="3">Backend</option>
              </select>
            </div>
            <div className='input input-1'>
              <label for="groupSize">Group Size</label>
              <select id="groupSize" name="groupSize" value={formData.groupSize} onChange={handleChange}>
              <option value="" disabled selected hidden>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
              </select>
            </div>
          </div>
        </form>
  
        <p className='review'>Please review your registration details before submitting</p>
        <div className='check'>
          <input type='checkbox'/>
          <span>I agreed with the event terms and conditions and privacy policy</span>
        </div>
        <button className='btn' onClick={register}>Register Now</button>
        <img src='/images/home/star-1.png' alt='img' className='star-4'/>
        <img src='/images/home/star.png' alt='img' className='star-5'/>
      </div>
      {registrationSuccess && <Success/>}
    </div>
  )
}

export default Register