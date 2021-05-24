import React from 'react';
import PropTypes from 'prop-types';
import ProjectsCard from '../App/components/ProjectsCard';

function Projects({
  firebaseKey,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
  projects,
  setProjects,
}) {
  return (
    <div className="this">
    <hr/>
    <h1>Projects</h1>
       <ProjectsCard
       firebaseKey={firebaseKey}
       githubUrl ={githubUrl}
       screenshot={screenshot}
       technologiesUsed={technologiesUsed}
       title={title}
       url={url}
       setProjects={setProjects}
       projects={projects}
       />
     </div>
  );
}

Projects.propTypes = {
  firebaseKey: PropTypes.string,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default Projects;
