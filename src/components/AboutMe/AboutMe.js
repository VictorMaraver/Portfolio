import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div id="aboutme" className="about-container">
      <div className="row" >
        <div className="col-md-8 about-desc">
          <h4>ABOUT ME</h4><br />
          <p>Hi, I'm Victor, a full-stack developer with experience in creating, developing and deploying applications and web pages.

            I'm currently looking for a job as a web/app developer to put into practice all the knowledge acquired during my stay at Ironhack, where we learned and practiced the latest technologies. I have done both frontend and backend projects.</p><br />

          <p>I am also passionate about sport. I love running, hiking, running in the mountains, mountaineering, climbing, cycling...
            Whenever I can I try to dedicate time to it because it gives me a lot of stability.


            <br/><br/>:)</p><br />

        </div>
        <div className="col-md-4 text-center">
          <img className='imgMe' src="https://media-exp1.licdn.com/dms/image/C4D03AQGjxiYBnY1LHQ/profile-displayphoto-shrink_800_800/0/1635245592828?e=1641427200&v=beta&t=DiJH3Z_no1PpV7i3q8Afh3VLcf9NDyvkTTNhKSorj-0" alt="me" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
