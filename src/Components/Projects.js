import React from 'react';
import ProjectBox from './ProjectBox';
import SentimentImage from '../images/twitter-sentiment.png';
import CaloriesImage from '../images/calories-tracker.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

console.log(ProjectBox)

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SentimentImage} projectName="Twitter Sentiment Analysis" />
        <ProjectBox projectPhoto={CaloriesImage} projectName="Calories Tracker" />
      </div>

    </div>
  )
}

export default Projects