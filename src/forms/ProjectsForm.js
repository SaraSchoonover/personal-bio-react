import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../helpers/data/projectData';

const ProjectsForm = ({
  formTitle,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
  firebaseKey,
  setProjects

}) => {
  const [project, setProject] = useState({
    githubUrl: githubUrl || '',
    screenshot: screenshot || '',
    technologiesUsed: technologiesUsed || '',
    title: title || '',
    url: url || '',
    firebaseKey: firebaseKey || null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectArray) => setProjects(projectArray));
    } else {
      addProject(project).then((projectArray) => setProjects(projectArray));
    }
  };

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
 <div className='project-form'>
 <form
   id='addProjectForm'
   autoComplete='off'
   onSubmit={handleSubmit}
   >
     <h2>{formTitle}</h2>
     <label>Project Title: </label>
     <input
        name='title'
        type='text'
       placeholder='title'
        value={project.title}
        onChange={handleInputChange}
     >
     </input>
     <label>Github Url: </label>
     <input
        name='githubUrl'
        type='url'
        placeholder='githubUrl'
        value={project.githubUrll}
        onChange={handleInputChange}
     ></input>
     <label>Screenshot: </label>
     <input
        name='screenshot'
        type='text'
       placeholder='screenshot'
        value={project.screenshot}
        onChange={handleInputChange}
     >
     </input>
     <label>Technologies Used: </label>
     <input
        name='technologiesUsed'
        type='text'
       placeholder='technologiesUsed'
        value={project.technologiesUsed}
        onChange={handleInputChange}
     >
     </input>
     <label>Url: </label>
     <input
        name='url'
        type='text'
       placeholder='url'
        value={project.url}
        onChange={handleInputChange}
     >
     </input>
     <button type='submit'>Submit</button>
 </form>
 </div>
    </>
  );
};

ProjectsForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  firebaseKey: PropTypes.string,
  setProjects: PropTypes.string
};

export default ProjectsForm;
