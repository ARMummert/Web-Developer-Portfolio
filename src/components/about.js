import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
        <h1 className='about-page'>Amy Mummert</h1>
        <h2 className='about-page2'>Software Engineer</h2>
        <p className='intro-text'>Hi, My name is Amy and I am passionate about software engineering and 
            full stack development, providing the user with applications that are innovative, user friendly, 
            and follow coding best practices. I have experience with writing and testing code, TDD, web development, 
            and am skilled in the software development life cycle. Thanks for visiting!
        </p>    
        <div className='link'>
        <Link to="/contact"><button className='button-24-about'>Contact Me</button></Link>    
        </div> 
         </div>   
              
    );
};

export default About;