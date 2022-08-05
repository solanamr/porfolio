import logo from '../../assets/images/logo-s.png'
import './home.scss';
import { Link, NavLink} from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'
import logoSub from '../../assets/images/logo_sub.png'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';



export default function Home(){

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'l', 'a', 'n', 'a']


    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


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

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={logo} alt="" />
                    <span className={`${letterClass} _15`}>o</span>
                    <span className={`${letterClass} _16`}>l</span>
                    <span className={`${letterClass} _17`}>a</span>
                    <span className={`${letterClass} _18`}>n</span>
                    <span className={`${letterClass} _19`}>a</span>
                </h1>
                <h2>Fullstack developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME!</Link>
            </div>
        </div>


    </div>
    )
}