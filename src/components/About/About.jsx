import { Link, NavLink } from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'
import { faHome, faUser, faEnvelope, faComputer, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Particless from '../Particules/Particles';
import { Loader } from 'react-loaders';


import html from '../../assets/images/html.svg';
import js from '../../assets/images/js.svg';
import react from '../../assets/images/react.svg';
import redux from '../../assets/images/redux.svg';
import css from '../../assets/images/css.svg';
import node from '../../assets/images/nodejs.svg';
import express from '../../assets/images/express.svg';
import post from '../../assets/images/pgsql.svg';
import seq from '../../assets/images/sequelize.svg';

import './About.scss'


export default function About(){
    return(
        
        <div>
           <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img className='img' src={logoS} alt="logo" />
            </Link>
            <nav>
                <NavLink exact= 'true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color= '#171219' />
                </NavLink>
                <NavLink exact= 'true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color= '#171219' />
                </NavLink>
                <NavLink exact= 'true' activeclassname='active' className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faComputer} color= '#171219' />
                    </NavLink>
                    <NavLink exact= 'true' activeclassname='active' className='skills-link' to='/skills'>
                    <FontAwesomeIcon icon={faGear} color= '#171219' />
                </NavLink>
                <NavLink exact= 'true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color= '#171219' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/solana-romero/">
                <FontAwesomeIcon icon={faLinkedin} color= '#171219' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/solanamr">
                <FontAwesomeIcon icon={faGithub} color= '#171219' />
                    </a>
                </li>
            </ul>
         </div>

            
         <div className='container about-page'> 
            <div className='text-zone'>
                <div className='box1'>
                    <h1 className='h1'>About me</h1>
                </div>
                <div className='box2'>
                    <h1 className='h1-2'>About me</h1>
                </div>
                <p>I'm a fullstack developer living in Santa Fe, Argentina.Really passionate about making beautiful webpages that makes you go "WOW" when you see them.</p>

                <p>I really like working on both front and back-end projects. I'm funny, a team player and naturally curious. Working hard to learn new technologies that can make me grow in the industry.</p>

                <p>Well-organised person, a great baker and a fan of TV series and movies. A lover of coffee and a good meal.</p>
            </div>

            
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper">

                    <SwiperSlide><img src={html} alt="html" /></SwiperSlide>
                    <SwiperSlide><img src={js} alt="js" /></SwiperSlide>
                    <SwiperSlide><img src={react} alt="react" /></SwiperSlide>
                    <SwiperSlide><img src={redux} alt="redux" /></SwiperSlide>
                    <SwiperSlide><img src={css} alt="css" /></SwiperSlide>
                    <SwiperSlide><img src={node} alt="node" /></SwiperSlide>
                    <SwiperSlide><img src={express} alt="express" /></SwiperSlide>
                    <SwiperSlide><img src={post} alt="post" /></SwiperSlide>
                    <SwiperSlide><img src={seq} alt="seq" /></SwiperSlide>

                </Swiper>
            <div className='particles'>
                    <Particless/> 
            </div>
                
         </div>
         

        </div>
    )
}