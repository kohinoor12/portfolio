import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kohinoor Bharti</h4>
      <h4>Copyright &copy; 2024 Kb.</h4>
      <div className='footerLinks'>
        <a href="https://github.com/kohinoor12" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kohinoorbharti0806/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
        <a href='mailTo:kohinoorbharti7@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer