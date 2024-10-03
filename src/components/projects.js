import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await fetch('https://quiet-savannah-01204-a5663fb3f578.herokuapp.com/api/projects/');
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Projects data:', data);
        setProjectsData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    
    fetchProjectsData();
  }, []); 
  
  const [OtherProjectData, setOtherProjectData] = useState([]);

  useEffect(() => {
    const fetchOtherProjectData = async () => {
      try {
        const response = await fetch('https://quiet-savannah-01204-a5663fb3f578.herokuapp.com/api/other_project/');
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Other Project data:', data);
        setOtherProjectData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    
    fetchOtherProjectData();
  }, []); 
  
  return (
    <div>
      <div className='project-page'>
      <h1 className='projects'>Projects</h1>
      <ul>
        {projectsData.map(project => (
          <li className='proj-id' key={project.id}>
            <div className='proj-desc'>
              <h1 className='featured-proj'>Featured Project</h1>
              <h3 className='proj-title' >{project.title}</h3>
              <h3 className='proj-sum'>{project.description}</h3><br />
              <img className='featured-img' src={project.image} alt={project.title} />
              <span><span className='git-link'>    
                <a className='repo-link' href={project.github} target="_blank" rel="noopener noreferrer" title={`GitHub: ${project.title}`}>
                  <button className='button-24-about'>GitHub</button>
                </a>
              </span>
              <span className='demo-link'>  
                <a className='repo-link' href={project.demo} target="_blank" rel="noopener noreferrer" title={`Demo: ${project.title}`}>
                  <button className='button-24-about'>Demo</button> 
                </a>
              </span></span><br />
              <span className='prog-lang'> {project.proj_lang} </span>            
            </div>      
          </li>
        ))}
      </ul>
      </div>
     <div className='project-page3'>
      <ul>
        {OtherProjectData.map(OtherProject => (
          <li className='other-proj-id' key={OtherProject.id}>
            <p className='other-proj-desc'>
              {OtherProject.description}<br />
              <div className='git-link2'>
              <a href={OtherProject.github} target="_blank" rel="noopener noreferrer" title={`GitHub: ${OtherProject.title}`}>
                  <button className='button-24-other'>GitHub Repo</button>
                </a>
                <a href={OtherProject.demo} target="_blank" rel="noopener noreferrer" title={`Demo: ${OtherProject.title}`}>
                <button className='button-24-other'>Demo</button>
                </a>
              </div><br />
              <span className='prog-lang'>{OtherProject.proj_lang}</span>
            </p>
           
          </li>
        ))}
      </ul>
    </div>
    </div>
  );  
};

export default Projects;
