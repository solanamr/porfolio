import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SideBar from '../SideBar/SideBar';
import foodApp from '../../assets/images/foodapp.PNG';
import concerteck from '../../assets/images/concerteck1.jpg';
import weather from '../../assets/images/wp.PNG';
import './Projects.scss';

export default function Projects(){
    return(
        <div>
            <SideBar/>
            
        <div className='project-container'>
            <div className='project-box'>
                <div className='project-cont'>
                    <div className='project-div'>
                        <p className='span'>ConcerTek</p>
                        <img src={concerteck} alt="foodApp" />
                            <div className='a'>
                                <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/concerTeck">
                                <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                </a>
                                <a target="_blank" rel='noreferrer' href="https://concer-teck-front-end.vercel.app/">
                                <FontAwesomeIcon icon={faGlobe} color= '#6C757D' className='fonta' />
                                </a>
                            </div>
                        </div>
                        <div className='project-div'>
                            <p className='span'>Food App</p>
                            <img src={foodApp} alt="concerteck" />
                                <div className='a'>
                                    <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/PI-Food">
                                    <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                    </a>
                                    <a target="_blank" rel='noreferrer' href="https://food-app-solanamr.vercel.app/">
                                    <FontAwesomeIcon icon={faGlobe} color= '#6C757D' className='fonta' />
                                    </a>
                                </div>
                        </div>
                        <div className='project-div'>
                            <p className='span'>Weather App</p>
                            <img src={weather} alt="concerteck" />
                                <div className='a'>
                                <a target="_blank" rel='noreferrer' href="https://github.com/solanamr/WheatherApp">
                                <FontAwesomeIcon icon={faGithub} color= '#6C757D' className='fonta' />
                                </a>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}
