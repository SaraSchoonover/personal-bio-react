import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
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
 <Container
 style={{
   width: '30rem',
   flex: 'initial',
   flexDirection: 'row',
   flexWrap: 'wrap',
 }}
 className='project-form'>
 <form
   id='addProjectForm'
   autoComplete='off'
   onSubmit={handleSubmit}
   >
     <h2>{formTitle}</h2>
     <label> Project Title: </label>
     <input
        name='title'
        type='text'
       placeholder=''
        value={project.title}
        onChange={handleInputChange}
     >
     </input>
        <hr></hr>
     <label>Github Url:  </label>
     <input
        name='githubUrl'
        type='url'
        placeholder=''
        value={project.githubUrll}
        onChange={handleInputChange}
     ></input>
         <hr></hr>
     <label>Screenshot: </label>
     <input
        name='screenshot'
        type='text'
       placeholder=''
        value={ project.screenshot}
        onChange={handleInputChange}
     >
     </input>
          <hr></hr>
     <label>Technologies Used: </label>
     <input
        name='technologiesUsed'
        type='text'
       placeholder=''
        value={project.technologiesUsed}
        onChange={handleInputChange}
     >
     </input>
         <hr></hr>
     <label>Url: </label>
     <input
        name='url'
        type='text'
       placeholder=''
        value={project.url}
        onChange={handleInputChange}
     >
     </input>
     <hr></hr>
     <button style={{ justifyContent: 'center' }} type='submit'>Submit</button>
 </form>
 </Container>
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
  setProjects: PropTypes.func
};

export default ProjectsForm;
