import React from 'react'
import './_criteria.scss'

const Criteria = () => {
  return (
    <div className='criteria bg-criteria'>
      <div className='heading flex justify-between'>
        <div className='img'>
          <img src='/images/body/star.png' alt='img'/>
        </div>
        <div className='judge'>
          <p>Judging Criteria</p>
          <p className='tech'>Key attributes</p>
        </div>
      </div>

      <div className='flex justify-around items-center max-md:flex-col'>
        <div className='attributes'>
          <img src='/images/body/criteria.png' alt='img' className='img-1'/>
          <div className='img-2'></div>
          <img src='/images/body/star.png' alt='img' className='img-3'/>
          <img src='/images/home/star.png' alt='img' className='img-4'/>
        </div>

        <div className='criteria-content'>
          <div className='heading-1'>
            <p>Judging Criteria</p>
            <p className='tech'>Key attributes</p>
          </div>

          <div className='text-content'>
            <p className='text text-1'>
              <span>Innovation and Creativity:</span>
              Evaluate the uniqueness and creativity of the solution. Consider whether it
              addresses a real-world problem in a novel way or introduces innovative features.
            </p> 
            <p className='text'>
              <span>Functionality:</span>
              Assess how well the solution works. Does it perform its intended functions effectively
              and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>
            <p className='text'>
              <span>Impact and Relevance:</span>
              Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant 
              to the target audience? Judges would assess the potential social, economic, or environmental benefits.
            </p>
            <p className='text'>
              <span>Technical Complexity:</span>
              Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code,
              the use of advanced technologies or algorithms, and the scalability of the solution.
            </p>
            <p className='text'>
              <span>Adherence to Hackathon Rules:</span>
              Judges will Ensure that the team adhered to the rules and guidelines of the hackathon,
              including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
            </p>
          </div>
          <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Criteria