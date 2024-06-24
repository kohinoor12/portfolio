import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Calories TrackerDesc": "A calorie tracker app built with Django and Ninja API, enabling users to log meals, track calories, and monitor progress. This project showcases efficient data processing and a user-friendly interface, highlighting my web development and API integration skills.",
    "Calories TrackerGithub": "https://github.com/kohinoor12/caloriecounter.git",
    "Calories TrackerWebsite": "https://github.com/kohinoor12/caloriecounter.git/",

    "Twitter Sentiment AnalysisDesc": "A Twitter sentiment and emotion analysis tool that predicts the sentiment or emotions of given tweets based on a trained machine learning model. Built with Django, NLTK, and Tweepy, it offers real-time analysis to discern public opinion and emotional trends from Twitter data.",
    "Twitter Sentiment AnalysisGithub": "https://github.com/kohinoor12/senti.git",
    "Twitter Sentiment AnalysisWebsite": "https://senti-o4th.onrender.com/",
  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox
