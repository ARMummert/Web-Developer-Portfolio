import React from 'react';
import './css/style.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faCode, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div>   
        <header>
            <div className='logo'>
             
            </div>
            <nav>
                <ul>
                    <li className='navigation'>
                        <Link className='nav-links' to="/">
                            <FontAwesomeIcon icon={faHome} className='icon' />
                        </Link>
                    </li>
                    <li className='navigation'> 
                        <Link className='nav-links' to="/about">
                            <FontAwesomeIcon icon={faUser} className='icon' />
                        </Link>
                    </li>
                    <li className='navigation'>
                        <Link className='nav-links' to="/projects">
                            <FontAwesomeIcon icon={faCode} className='icon' />
                        </Link>
                    </li>
                    <li className='navigation'>
                        <Link className='nav-links' to="/experience">
                            <FontAwesomeIcon icon={faBriefcase} className='icon' />
                        </Link>
                    </li>
                    <li className='navigation'>
                        <Link className='nav-links' to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <footer id='footer-text'>    
            <div>
                    <a id='social-color' href='https://www.linkedin.com/in/armummert' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                    </a>
                    <a id='social-color' href='https://github.com/ARMummert' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} className='icon' />
                    </a>
                    <a id='social-color' href='https://armummert4.wordpress.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faWordpress} className='icon'/>
                    </a>
            </div>
            <div>&copy; 2024 Amy Mummert. All Rights Reserved </div>
            
        </footer>      
        </div> 
    );
};
export default Header;