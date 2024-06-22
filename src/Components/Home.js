import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>KOHINOOR BHARTI</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>LET ME <b>INTRODUCE</b> MYSELF</h1>
          <p>
            I love the process of changing a raw idea into a website or a product
            that impact lives.
            <br />
            <br />
            I am fluent in classics like <b>Python</b>, <b>Javascript</b> and <b>C</b>.
            <br />
            <br />
            My field of Interest's are building new  <b>Web Technologies and Products.</b>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products with <b>Node.js</b> and Modern <b>Javascript Library</b> and <b>Frameworks</b>  like <b>React.js</b> and <b>Next.js</b>
            <br />
            <br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home