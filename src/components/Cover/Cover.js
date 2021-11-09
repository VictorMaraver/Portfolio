import './Cover.css'
import React from 'react'
import coverVideo from './../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
    <video className='video' src={coverVideo} autoPlay loop muted />

    <h1>Victor Maraver</h1>
    <p>Front End Developer  ❤️ </p>
      
    </div>
  )
}

export default Cover
