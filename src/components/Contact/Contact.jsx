import './Contact.scss'
import { Link, NavLink} from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'
import { faHome, faUser, faEnvelope, faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'



export default function Contact(){

    const refForm = useRef()
    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm(
            'gmail', 'template_ffv35vm', refForm.current,
            'CWgOMs1YIAH8inFAAzYHU'
        )
        .then(
            () =>{
                alert('Message succefully sent!')
                window.location.reload(false)
            },
            () =>{
                alert('Failed to send, please try again!')
            }
        )
    }

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

        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                        <div className='box1'>
                            <h1 className='h1'>Contact me</h1>
                        </div>
                        <div className='box2'>
                            <h1 className='h1-2'>Contact me</h1>
                        </div>
                    <p>If you are interested in contacting me you can fill out the form so we can chat!</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}> 
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                <textarea name="message"  placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}