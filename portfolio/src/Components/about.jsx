import React from 'react';
import about from '../img/about.jpg';
import home from '../img/home.jpg';

export default function About() {

    return(
        <div id="about">
        <img src={about} alt='Art work' data-aos="zoom-in" />
        <div id='myabout' data-aos="zoom-in">
        <b>“</b>
        <hr/>
        <p>"In my daily life, I wear multiple hats. I'm a dedicated professional working in a company, where I apply my expertise
             as a front-end developer. This role allows me to gain real-world experience and continually refine my skills.<br/><br/>
             Outside of work, I maintain a well-rounded lifestyle. I'm passionate about staying active and make time for sports
              and fitness. It not only keeps me in great shape but also helps me stay focused and energized.<br /><br/>
              In parallel, I'm pursuing a master's degree in Web Technology and Informatics Engineering at Universidade Aberta.
               This academic journey enriches my knowledge and keeps me at the forefront of the ever-evolving web technology landscape. Balancing work, sports, and education is a fulfilling challenge I embrace every day.</p>
              <span id='small-pic'><img src={home} alt='Abderrazak Mahi'/>Abderrazak Mahi - Web Developer</span>
        </div>
        </div>
    )
}