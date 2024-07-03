import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Kohinoor Bharti</b> and I am from Mumbai, India.
            I'm a passionate and dedicated <b>Full Stack Developer</b> with over <b>2 years</b> of experience in the tech industry and with a keen eye for detail and a drive for excellence. With a strong foundation in both <b>front-end</b> and <b>back-end</b> technologies, I craft seamless, user-friendly applications that meet the highest standards of performance and design.
          </p>
          <br />
          <br />
          <h1 className='AboutTextHeading' >My <b>journey</b></h1>
          <p>
            Having completed my <b>Bachelor of Technology in IT/Data Science</b>, my journey into the world of web development began with a profound curiosity about the construction and functionality of websites. My foundational knowledge in <b>IT</b> and <b>Data Science</b> equipped me with a solid understanding of <b>programming languages</b>, <b>data handling</b>, and <b>analytical skills</b>. This background provided a robust foundation for delving into the intricacies of <b>Web Development</b>.
          </p>
          <br />
          <br />
          <h1 className='AboutTextHeading' >What <b>i do</b></h1>
          <p>
            As a full stack developer, I handle both the front-end and back-end aspects of web development. Here’s a glimpse of my skill set:
            <br />
            <br />
            <ul>
              <li>
                <b>Front-End Development:</b> Proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and popular frameworks such as <b>React</b>. I strive to create intuitive and responsive user interfaces.
              </li>
              <li>
                <b>Back-End Development:</b> Experienced in server-side technologies like <b></b>Node.js, <b>Python(including Django and Flask frameworks)</b>, and databases such as <b>MongoDB</b> and <b>SQL</b>. I ensure that the server, application, and database communicate seamlessly.
              </li>
              <li>
                <b>Full Stack Integration:</b> Skilled in integrating front-end and back-end components to deliver cohesive and fully functional web applications.
              </li>
              <li>
                <b>DevOps & Tools:</b> Familiar with version control <b>(Git)</b>, deployment processes, and continuous integration/continuous deployment <b>(CI/CD)</b> practices.
              </li>
            </ul>
          </p>
          <br />
          <br />
          <h1 className='AboutTextHeading' >Why work <b>with me</b></h1>
          <ul>
            <li>
              <b>Problem Solver:</b> I enjoy tackling complex problems and finding innovative solutions that enhance functionality and user experience.
            </li>
            <li>
              <b>Detail-Oriented:</b> I have a keen eye for detail, ensuring that every aspect of a project is polished and meets the highest standards.
            </li>
            <li>
              <b>Collaborative:</b> I thrive in team environments and believe that the best results come from open communication and collaboration.
            </li>
            <li>
              <b>Continuous Learner:</b> The tech landscape is always evolving, and I’m committed to staying up-to-date with the latest trends and technologies.
            </li>
          </ul>

        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional <b>Skillset</b></h1>
      <div className='skills'>

        <Skills skill='Python' />
        <Skills skill='Django' />
        <Skills skill='Flask' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Javascript' />
        <Skills skill='MongoDb' />
        <Skills skill='MySQL' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='HTML5' />
        <Skills skill='CSS3' />
      </div>

      <h1 className='SkillsHeading'> <b>Tools</b> I Use</h1>
      <div className='skills'>

        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
      </div>
    </>
  )
}

export default About