import logo from '../../assets/images/logo-s.png'
import { Link, NavLink} from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'
import { faHome, faUser, faEnvelope, faComputer, faGear, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import foodApp from '../../assets/images/foodapp.PNG';
import concerteck from '../../assets/images/concerteck1.jpg';
import weather from '../../assets/images/wp.PNG';
import './Projects.scss';

export default function Projects(){
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

        <div className='project-container'>
            <div className='project-box'>
                <div className='project-cont'>
                    <div className='project-div'>
                        <h4 className='span'>ConcerTek</h4>
                        <img src={concerteck} alt="foodApp" />
                        <div className='a'>
                            <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/PI-Food">
                            <FontAwesomeIcon icon={faGithub} color= '#6C757D' />
                            </a>
                            <a target="_blank" rel='noreferrer' href="https://food-app-solanamr.vercel.app/">
                            <FontAwesomeIcon icon={faGlobe} color= '#6C757D' />
                            </a>
                    </div>
                        </div>
                        <div className='project-div'>
                            <h4 className='span'>Food App</h4>
                            <img src={foodApp} alt="concerteck" />
                                <div className='a'>
                                <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/concerTeck">
                                <FontAwesomeIcon icon={faGithub} color= '#6C757D' />
                                </a>
                                <a target="_blank" rel='noreferrer' href="https://concer-teck-front-end.vercel.app/">
                                <FontAwesomeIcon icon={faGlobe} color= '#6C757D' />
                                </a>
                                </div>
                        </div>
                        <div className='project-div'>
                            <h4 className='span'>Weather App</h4>
                            <img src={weather} alt="concerteck" />
                                <div className='a'>
                                <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/WheatherApp">
                                <FontAwesomeIcon icon={faGithub} color= '#6C757D' />
                                </a>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}