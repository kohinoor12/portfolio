import React from 'react';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiDjango } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiFlask, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Python: <FaPython />,
    Django: <DiDjango />,
    Flask: <SiFlask />,
    MySQL: <SiMysql />,
    HTML5: <SiHtml5 />,
    CSS3: <SiCss3 />,
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
