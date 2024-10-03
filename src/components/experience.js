import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [certificationsData, setCertificationsData] = useState([]);
  const [achievementsData, setAchievementsData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const experienceResponse = await fetch('https://quiet-savannah-01204-a5663fb3f578.herokuapp.com/api/experience/');
        const experienceData = await experienceResponse.json();
        setExperienceData(experienceData);

        const certificationsResponse = await fetch('https://quiet-savannah-01204-a5663fb3f578.herokuapp.com/api/certifications/');
        const certificationsData = await certificationsResponse.json();
        setCertificationsData(certificationsData);

        const achievementsResponse = await fetch('https://quiet-savannah-01204-a5663fb3f578.herokuapp.com/api/achievements/');
        const achievementsData = await achievementsResponse.json();
        setAchievementsData(achievementsData);

        const educationResponse = await fetch('https://quiet-savannah-01204-a5663fb3f578.herokuapp.com/api/education/');
        const educationData = await educationResponse.json();
        setEducationData(educationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData();
  }, []); 
  return (
    <div>
      <h1 className='experience'>Experience</h1>
      <p className='exp-summary'>"The only skill that will be important in the 21st century is the skill of learning new skills. Everything else will become obsolete over time." </p>
      <p className='exp-summary'>- Peter Drucker</p>
      <div id='work-block'>
      <ul id='data'>
        {experienceData.map(experience => (
          <li className='proj-title' key={experience.id}>
            <h3 className='job-title'>{experience.name}</h3>
            <p className='job-year'>Start Date - {experience.start_date}</p>
            <p className='job-year2'>End Date - {experience.end_date}</p>
            <p id='work-exp'>{experience.company}</p>
            <p id='work-exp2'>{experience.location}</p>
            <p id='work-exp3'>{experience.description}</p>
          </li>
          
        ))}
      </ul>
      </div>  
      <div id='skills'>
  <h2 id='prog-skills'>Programming Skills</h2>
  <ul className='tech-list'>
    <li>Python</li>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
    
    <li>C</li>
    <li>C#</li>
    <li>ReactJS</li>
    <li>NodeJS</li>
    </ul>
    <ul className='tech-list2'>
    <li>ExpressJS</li>
    <li>PostgreSQL</li>
    <li>SQLite</li>
    <li>MySQL</li>
    <li>Heroku</li>
    </ul>
    <ul className='tech-list3'>
    <li>Django</li>
    <li>RabbitMQ</li>
    <li>Docker</li>
    <li>Linux</li>
    <li>GitHub</li>
  </ul>
</div>

<div id='skills'>
  <h2 id='prog-skills'>Technical Skills</h2>
  <ul className='tech-list'>
    <li>API Development</li>
    <li>UI/UX Design</li>
    <li>Web Development</li>
    </ul>
    <ul className='tech-list'>
    <li>Software Development</li>
    <li>Database Management</li>
    </ul>
    <ul className='tech-list2'>
    <li>Agile Methodologies</li>
    <li>Debugging</li>
    <li>Scrum</li>
    </ul>
    <ul className='tech-list'>
    <li>Continuous Deployment</li>
    <li>Continuous Integration</li>
    </ul>
    <ul className='tech-list'>
    <li>Software Development Life Cycle</li>
    </ul>
    <ul className='tech-list'>
    <li>Version Control</li>
    <li>Code Review</li>  
    <li>Responsive Design</li>
    </ul>
    <ul className='tech-list'>
    <li>Object-Oriented Programming</li>
    <li>Git/GitHub</li>
    </ul>
    <ul className='tech-list'>
    <li>Functional Programming</li>
    </ul>
    <ul className='tech-list'>
    <li>Test-Driven Development</li>
   </ul>
</div>

<div  id='skills'>
  <h2 id='prog-skills'>Personal Skills</h2>
  <ul className='tech-list'>
    <li>Team Collaboration</li>
    <li>Problem-Solving</li>
  </ul>
    <ul className='tech-list'>
    <li>Effective Written and Verbal Communication</li>
    </ul>
    <ul className='tech-list'>
    <li>Adaptable</li>
    <li>Detail Oriented</li>
    </ul>
    <ul className='tech-list'>
    <li>Workload Prioritization</li>
    <li>Time Management</li>
  </ul>
</div>
     
      <ul id='data'>
        {certificationsData.map(certification => (
          <li id='cert-box' key={certification.id}>
            <p className='cert'>{certification.certificate_name}</p>
            <p className='cert2'>Received - {certification.date_received}</p>
          </li>
        ))}
      </ul> 
      <ul className='data'>
    
        {achievementsData.map(achievements => (
          <li className='proj-title' key={achievements.id}>
            <div id='achievements'>
            <p className='achievements'>{achievements.name}</p>
            <p className='achievements'>{achievements.description}</p>
            <p className='achievements'>{achievements.date_received}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul className='data'> 
        {educationData.map(education => (
          <li className='proj-title' key={education.id}>
            <div className='edu'>
            <p>{education.degree}</p>
            <p>{education.institution}</p>
            <p>{education.graduation_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
