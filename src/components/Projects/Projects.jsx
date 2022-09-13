import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SideBar from '../SideBar/SideBar';
import foodApp from '../../assets/images/foodapp.PNG';
import concerteck from '../../assets/images/concerteck1.jpg';
import weather from '../../assets/images/wp.PNG';
import bb from '../../assets/images/bb.PNG';
import './Projects.scss';

export default function Projects(){
    return(
        <div>
            <SideBar/>
            
        <div className='project-container'>
            <div className='project-box'>
                <div className='project-cont'>
                    <div className='project-div'>
                        <img src={bb} alt="bobsburgers" />
                            <div className='a-hover'>
                                <p className='span'>Bob's Burgers App</p>
                                <p className='desc'>SPA with searchbar and detail of characters.</p>
                                <div>
                                    <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/bobsBurgers">
                                    <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                    </a>
                                    <a target="_blank" rel='noreferrer' href="https://bobsburgers-app.vercel.app/">
                                    <FontAwesomeIcon icon={faGlobe} color= '#6C757D' className='fonta' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className='project-div'>
                        <img src={concerteck} alt="foodApp" />
                            <div className='a-hover'>
                                <p className='span'>ConcerTek</p>
                                <p className='desc'>E-commerce made with Auth0, Leaflet, Stripe, amoung others.</p>
                                <div>
                                    <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/concerTeck">
                                    <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                    </a>
                                    <a target="_blank" rel='noreferrer' href="https://concer-teck-front-end.vercel.app/">
                                    <FontAwesomeIcon icon={faGlobe} color= '#6C757D' className='fonta' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='project-div'>
                            <img src={foodApp} alt="foodApp" />
                                <div className='a-hover'>
                                    <p className='span'>Food App</p>
                                    <p className='desc'>SPA with searchbar, creation, detail, etc of food recipes.</p>
                                    <div>
                                        <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/PI-Food">
                                        <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                        </a>
                                        <a target="_blank" rel='noreferrer' href="https://food-app-solanamr.vercel.app/">
                                        <FontAwesomeIcon icon={faGlobe} color= '#6C757D' className='fonta' />
                                        </a>
                                        </div>
                                </div>
                        </div>
                    <div className='project-div'>
                        <img src={weather} alt="concerteck" />
                            <div className='a-hover'>
                                <p className='span'>Weather App</p>
                                <p className='desc'>Display of the weather of countries, cities, etc.</p>
                                    <div>
                                    <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/WheatherApp">
                                    <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                    </a>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}
