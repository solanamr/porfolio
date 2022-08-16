import './Contact.scss'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SideBar from '../SideBar/SideBar';


export default function Contact(){

    const [emailData, setEmailData] = useState({
        name: "", 
        email: "", 
        subject: "", 
        message: ""
    });

    function handleChange(e){
        setEmailData({
            ...emailData,
            [e.target.name] : e.target.value
        })
    }

    function sendEmail(e){
        e.preventDefault()
        emailjs.send('service_v0i504i', 'template_ffv35vm', emailData, 'dTwc7sMrSbni_ZCkC')
        .then(function(response) {
            alert('Message succefully sent!')
                window.location.reload(false)
        }, function(error) {
            alert('Failed to send, please try again!')
        })
    }

    return(
    <div>
       <SideBar/>
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
                                    <input type="text" name="name" value={emailData.name} placeholder='Name' 
                                    onChange={(e) => handleChange(e)} required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" value={emailData.email} placeholder='Email' 
                                    onChange={(e) => handleChange(e)} required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' value={emailData.subject} 
                                    onChange={(e) => handleChange(e)} required/>
                                </li>
                                <li>
                                <textarea name="message" value={emailData.message} placeholder='Message' 
                                onChange={(e) => handleChange(e)} required></textarea>
                                </li>
                                <li>
                                <button>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
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
                    Solana, Romero.
                    <br />
                     Argentina.
                     <br />
                     Santa Fe. <br />
                     <span>romerosolana@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.2406158374633!2d-60.677813785264014!3d-31.599865981343424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5075497908009%3A0x3f29bb8c395fc174!2sCnel.%20Dorrego%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1660241534926!5m2!1ses!2sar" 
                width="770" height="720" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='iframe'></iframe>
                </div>
            </div>
        </div>
    </div>
    )
}