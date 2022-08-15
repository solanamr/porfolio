import './home.scss';
import logo from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { useEffect, useState } from 'react';
import Logo from './Logo/Logo'


export default function Home(){

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return(
        <div>
            <SideBar/>

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
                <h2 className='h2'>Fullstack developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME!</Link>
            </div>
            <Logo/>
        </div>
    </div>
    )
}