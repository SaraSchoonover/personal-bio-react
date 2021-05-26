import React from 'react';
import PropTypes from 'prop-types';
import ProjectsForm from '../forms/ProjectsForm';
import '../styles/index.scss';

function AddProject({ setProjects }) {
  return (
    <div>
    <ProjectsForm
      formTitle="Add A Project"
      setProjects={setProjects}
      />
      </div>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func
};

export default AddProject;
