import React from 'react'
import './_timeline.scss'

const Timeline = () => {
  const pointer = (number) => (
    <div className="pointer">
      <div className="line line-1"></div>
      <div className="shape">{number}</div>
    </div>
  )

  return (
    <div className='timeline'>
      <div className='heading'>
        <p>Timeline</p>
        <p className='desc'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </div>

      <div className='container-2'>
        <div className='container-2-content'>
          <div className='point-1'>{pointer(1)}</div>
          <div className='box right'>
            <p className='announcement'>
              <p>Hackathon Announcement</p>
              <p className='text'>
                The getlinked tech hackathon 1.0 is formally announced to
                the general public and teams begin to get ready to register
              </p>
            </p>
            <div className='point'>{pointer(1)}</div>
            <p className='date'>November 18, 2023</p>
          </div>
        </div>

        <div className='container-2-content'>
          <div className='point-1'>{pointer(2)}</div>
          <div className='box reverse'>
            <p className='date date-1'>November 18, 2023</p>
            <div className='point'>{pointer(2)}</div>
            <p className='announcement'>
              <p>Teams Registration begins</p>
              <p className='text'>
                Interested teams can now show their interest in the
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </p>
            </p>
          </div>
        </div>

        <div className='container-2-content'>
          <div className='point-1'>{pointer(3)}</div>
          <div className='box right'>
            <p className='announcement'>
              <p>Teams Registration ends</p>
              <p className='text'>
                Interested Participants are no longer Allowed to register
              </p>
            </p>
            <div className='point'>{pointer(3)}</div>
            <p className='date'>November 18, 2023</p>
          </div>
        </div>

        <div className='container-2-content'>
          <div className='point-1'>{pointer(4)}</div>
          <div className='box reverse'>
            <p className='date date-1'>November 18, 2023</p>
            <div className='point'>{pointer(4)}</div>
            <p className='announcement'>
              <p>Announcement of the accepted teams and ideas</p>
              <p className='text'>
                All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
              </p>
            </p>
          </div>
        </div>

        <div className='container-2-content'>
          <div className='point-1'>{pointer(5)}</div>
          <div className='box right'>
            <p className='announcement'>
              <p>Getlinked Hackathon 1.0 Offically Begins</p>
              <p className='text'>
                Accepted teams can now proceed to build their ground breaking skill driven solutions
              </p>
            </p>
            <div className='point'>{pointer(5)}</div>
            <p className='date'>November 18, 2023</p>
          </div>
        </div>

        <div className='container-2-content'>
          <div className='point-1'>{pointer(6)}</div>
          <div className='box reverse'>
            <p className='date date-1'>November 18, 2023</p>
            <div className='point'>{pointer(6)}</div>
            <p className='announcement'>
              <p>Demo Day</p>
              <p className='text'>
                Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
              </p>
            </p>
          </div>
        </div>
        <img src='/images/body/star.png' alt='img' className='star-1'/>
        <img src='/images/home/star-1.png' alt='img' className='star-2'/>
        <img src='/images/home/star.png' alt='img' className='star-3'/>
      </div>
    </div>
  )
}

export default Timeline