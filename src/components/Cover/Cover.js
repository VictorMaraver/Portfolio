import './Cover.css'
import React from 'react'
import coverVideo from './../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
    <video className='video' src={coverVideo} autoPlay loop muted />
      
    </div>
  )
}

export default Cover
