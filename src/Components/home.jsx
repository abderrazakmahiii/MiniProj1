import React from 'react';
import home from '../img/home.jpg';

export const social = [
    {icon:'ri-linkedin-fill', link:'https://www.linkedin.com/in/abderrazakmahiii/'},
    {icon:'ri-github-fill', link:'https://github.com/abderrazakmahiii'},
    {icon:'ri-mail-fill', link:'mailto:abderrazakmahiii@gmail.com'},
    {icon: 'ri-facebook-fill', link:'https://www.facebook.com/abderrazakmahiii/'},
    {icon:'ri-instagram-line', link:'https://www.instagram.com/abderrazakmahiii/'}
]

export default function Home () {

    return (
        <div id='home'>
            <div id='home-text' data-aos="fade-right">
            <h1 id="homeh1">Hey, I'm Abderrazak.</h1>
            <p id="homep">I'm a 22yo an Algerian web developer, <br/>
             now residing in Portugal. I am a native Arab, I speak English and<br/> French at an excellent level and intermediate in portuguese.<br />  Currently pursuing a master's degree in Web Technology and Informatics Engineering<br />  at Universidade Aberta.</p>
            <ul id='social'>
                {social.map((media, index) => 
                (<li key={index} ><a href={media.link} target='_blank' rel="noopener noreferrer"><i className={media.icon}></i></a></li>)
                )}
            </ul>
            </div>
            <img src={home} alt='Abderrazak Mahi' data-aos="fade-left"/>
        </div>
    )
}
