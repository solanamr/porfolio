import './sideBar.scss';
import { Link, NavLink} from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'
import { faHome, faUser, faEnvelope, faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SideBar(){
    return(
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
    )
}