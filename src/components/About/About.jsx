
import SideBar from '../SideBar/SideBar'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Particless from '../Particules/Particles';
import html from '../../assets/images/html.svg';
import js from '../../assets/images/js.svg';
import react from '../../assets/images/react.svg';
import redux from '../../assets/images/redux.svg';
import css from '../../assets/images/css.svg';
import node from '../../assets/images/nodejs.svg';
import express from '../../assets/images/express.svg';
import post from '../../assets/images/pgsql.svg';
import seq from '../../assets/images/sequelize.svg';
import mdb from '../../assets/images/mdb.svg';
import git from '../../assets/images/git.svg'
import github from '../../assets/images/githubw.svg';
import figma from '../../assets/images/figma.svg';
import './About.scss'


export default function About(){
    return(
        
        <div>
            <SideBar/>

            
         <div className='container about-page'> 
            <div className='text-zone'>
                <div className='box1'>
                    <h1 className='h1'>About me</h1>
                </div>
                <div className='box2'>
                    <h1 className='h1-2'>About me</h1>
                </div>
                <div className='div-p'>
                <p className='p'>I'm a fullstack developer living in Santa Fe, Argentina.Really passionate about making beautiful webpages that makes you go "WOW" when you see them.</p>

                <p>I really like working on both front and back-end projects. I'm funny, a team player and naturally curious. Working hard to learn new technologies that can make me grow in the industry.</p>

                <p>Well-organised person, a great baker and a fan of TV series and movies. A lover of coffee and a good meal.</p>
                </div>
            </div>

            <div>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                    }}
            modules={[Autoplay]}
            className="mySwiper">

            <SwiperSlide><img src={html} alt="html" /> <p color='white'>HTML</p></SwiperSlide>
            <SwiperSlide><img src={js} alt="js" /> <p color='white'>Javascript</p></SwiperSlide>
            <SwiperSlide><img src={react} alt="react" /> <p color='white'>React.js</p></SwiperSlide>
            <SwiperSlide><img src={redux} alt="redux" /> <p color='white'>Redux</p></SwiperSlide>
            <SwiperSlide><img src={css} alt="css" /> <p color='white'>CSS</p></SwiperSlide>
            <SwiperSlide><img src={node} alt="node" /> <p color='white'>Node.js</p></SwiperSlide>
            <SwiperSlide><img src={express} alt="express" /> <p color='white'>Express</p></SwiperSlide>
            <SwiperSlide><img src={post} alt="post" /> <p color='white'>PostgreSQL</p></SwiperSlide>
            <SwiperSlide><img src={seq} alt="seq" /> <p color='white'>Sequelize</p></SwiperSlide>
            <SwiperSlide><img src={mdb} alt="mdb" /> <p color='white'>MongoDB</p></SwiperSlide>
            <SwiperSlide><img src={git} alt="git" /> <p color='white'>Git</p></SwiperSlide>
            <SwiperSlide><img src={github} alt="github" /> <p color='white'>Github</p></SwiperSlide>

            </Swiper>
            </div>
            
            <div className='particles'>
                <Particless/> 
            </div>
                
         </div>

        </div>
    )
}