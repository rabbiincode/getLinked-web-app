import React, {useState} from 'react'
import Header from '../header/Header'
import { useNavigate } from 'react-router'
import axios from 'axios';
import './_contact.scss'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
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

  const sendMessage = async (e) => {
    e.preventDefault()

    // Prepare the data to send to the API
    const requestData = {
      email: formData.email,
      first_name: formData.firstName,
      message: formData.message,
    }

    try {
      console.log(requestData)
      // Make the Axios POST request
      const response = await axios.post('https://backend.getlinked.ai/hackathon/contact-form', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        // Registration successful, handle success here
        console.log('Message sent successfully!')
      } else {
        // Handle registration errors
        console.error('Message could not send.')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='contact bg-contact flex items-center justify-around'>
      <div className='max-md:hidden'><Header/></div>
      <div className='contact-1'>
        <div className='show'>
          <div className='touch color'>Get in touch</div>
          <div>
            <p>Contact</p>
            <p>Information</p>
          </div>
          <div>
            <p>27,Alara Street</p>
            <p>Yaba 100012</p>
            <p>Lagos State</p>
          </div>
          <div>Call Us : 07067981819</div>
          <div>
            <p>we are open from Monday-Friday</p>
            <p>08:00am - 05:00pm</p>
          </div>
          </div>
        <div className='share'>
          <span className='color'>Share on</span>
          <div className='icons flex items-center'>
            <img src='/images/footer/instagram.png' alt='img'/>
            <img src='/images/footer/twitter.png' alt='img'/>
            <img src='/images/footer/facebook.png' alt='img'/>
            <img src='/images/footer/linkedin.png' alt='img'/>
          </div>
        </div>
        <img src='/images/body/star.png' alt='img' className='star-1'/>
      </div>

      <div className='contact-2'>
        <img src='/images/pages/arrow-left.png' alt='img' onClick={() => navigate('/')} className='arrow'/>
        <p>
          <p className='questions'>Questions or need assistance?</p>
          <p>Let us know  about it!</p>
          <p className='email'>Email us below to any question related to our event</p>
        </p>
        <form>
          <div className='show-small-screen'>
            <input type='text' placeholder="Team's Name" id='teamName' value={formData.teamName} onChange={handleChange}/>
            <input type='projectTopic' placeholder='Topic' id='projectTopic' value={formData.projectTopic} onChange={handleChange}/>
            <input type='email' placeholder='Email' id='email' value={formData.email} onChange={handleChange}/>
            <textarea placeholder='Message' rows="10" cols="60" id='message' value={formData.message} onChange={handleChange}/>
          </div>
          <div className='show-large-screen'>
            <input type='text' placeholder='First Name' id='firstName' value={formData.firstName} onChange={handleChange}/>
            <input type='email' placeholder='Mail' id='email' value={formData.email} onChange={handleChange}/>
            <textarea placeholder='Message' rows="5" cols="60" id='message' value={formData.message} onChange={handleChange}/>
          </div>
        </form>
        <button className='btn' onClick={sendMessage}>Submit</button>

        <img src='/images/body/star.png' alt='img' className='star-2'/>
        <img src='/images/home/star.png' alt='img' className='star-3'/>
        <img src='/images/home/star-1.png' alt='img' className='star-4'/>
      </div>
    </div>
  )
}

export default Contact