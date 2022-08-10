import './Contact.scss'
import { Link, NavLink} from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png'
import { faHome, faUser, faEnvelope, faComputer, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



export default function Contact(){

    const templateParams = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    function sendEmail(e){
        e.preventDefault()
        emailjs.send('service_v0i504i', 'template_ffv35vm', templateParams, 'dTwc7sMrSbni_ZCkC')
    .then(function(response) {
       alert('Message succefully sent!')
            window.location.reload(false)
    }, function(error) {
        alert('Failed to send, please try again!')
    })
        // .then(
        //     () =>{
        //         alert('Message succefully sent!')
        //         window.location.reload(false)
        //     },
        //     () =>{
        //         alert('Failed to send, please try again!')
        //     }
        // )
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

        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                        <div className='box1'>
                            <h1 className='h1'>Contact me</h1>
                        </div>
                        <div className='box2'>
                            <h1 className='h1-2'>Contact me</h1>
                        </div>
                    <p>If you are interested in working together, please fill out this form so we can chat more!</p>
                    <div className='contact-form'>
                        <form onSubmit={sendEmail}> 
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
                                <button>
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                 <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                             </svg>
                                        </div>
                                    </div>
                                    <span>Send</span>
                                </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Solana Romero
                    <br />
                     Argentina
                     <br />
                     Santa Fe <br />
                     <span>romerosolana@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-31.5954406,-60.6867307,15]} zoom={14}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[-31.5954406,-60.6867307,15]}>
                            <Popup>Nice to meet you!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
        
</div>
    )
}