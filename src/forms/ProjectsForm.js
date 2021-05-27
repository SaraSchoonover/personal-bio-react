import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addProject, updateProject } from '../helpers/data/projectData';

const ProjectsForm = ({
  githubUrl,
  screenshot,
  description,
  technologiesUsed,
  title,
  url,
  firebaseKey,
  setProjects

}) => {
  const [project, setProject] = useState({
    githubUrl: githubUrl || '',
    screenshot: screenshot || '',
    description: description || '',
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
    <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Project Form</h2>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            name='title'
            id='title'
            value={project.title}
            type='text'
            placeholder='Enter a Project Title'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            name='description'
            id='description'
            value={project.description}
            type='text'
            placeholder='Enter a Description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="screenshot">Screenshot:</Label>
          <Input
            name='screenshot'
            id='screenshot'
            value={project.screenshot}
            type='url'
            placeholder='Enter a Screenshot URL'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="technologiesUsed">Technologies Used:</Label>
          <Input
            name='technologiesUsed'
            id='technologiesUsed'
            value={project.technologiesUsed}
            type='text'
            placeholder='Enter Technologies Used'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="url">Project URL:</Label>
          <Input
            name='url'
            id='url'
            value={project.url}
            type='url'
            placeholder='Enter url'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="githubUrl">GitHub URL:</Label>
          <Input
            name='githubUrl'
            id='githubUrl'
            value={project.githubUrl}
            type='githubUrl'
            placeholder='Enter Github Url'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
};

ProjectsForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  firebaseKey: PropTypes.string,
  setProjects: PropTypes.func
};

export default ProjectsForm;
