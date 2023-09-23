import React from 'react'
import './_faqs.scss'
import AccordionToggle from './Accordion'

const Faqs = () => {
  return (
    <div className='faqs bg-faqs flex items-center justify-around max-md:flex-col'>
      <div className='faq-container-1'>
        <div className='faq-container-1-content'>
          <p>Frequently Ask</p>
          <p className='tech'>Question</p>
          <p className='text'>
            We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
          </p>
        </div>
        <div>
          <AccordionToggle/>
        </div>
        <img src='/images/body/star.png' alt='img' className='star'/>
      </div>
      <div className='faq-container-2'>
        <img src='/images/body/faqs.png' alt='img' className='img-1'/>
        <img src='/images/body/question.png' alt='img' className='img-2'/>
        <img src='/images/body/question.png' alt='img' className='img-3'/>
        <img src='/images/body/question.png' alt='img' className='img-4'/>
        <img src='/images/body/star.png' alt='img' className='img-5'/>
        <img src='/images/home/star.png' alt='img' className='img-6'/>
        <img src='/images/home/star-1.png' alt='img' className='img-7'/>
      </div>
    </div>
  )
}

export default Faqs