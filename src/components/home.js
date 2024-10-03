import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import Header from './header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div>
            <Header /> 
            <div className="container">
                <div className="logo-container">
                   
                </div>
                <div className="content">
                    <h3 id='animated-text' className='welcome'>Welcome, my name is</h3  >
                    <h1 id='animated-text' className='name'>Amy Mummert</h1>
                    <p id='animated-text' className='message'>I'm a Software Engineer - Fueled by Coffee, Driven by Code, and Bridging the Gap Between Ideas and Reality.</p>
                    <Link to="/projects"><button className='button-24-home'>Check Out My Work!</button></Link>
                </div>
            </div>
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

export default Home;
