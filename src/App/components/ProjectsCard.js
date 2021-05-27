import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardLink,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { deleteProject } from '../../helpers/data/projectData';
import ProjectsForm from '../../forms/ProjectsForm';
// import netlifyIcon from '../../assets/netlifyIcon.png';
// import gitNew from '../../assets/gitNew.png';

const ProjectsCard = ({
  projects,
  setProjects,
  admin,
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteProject(fbKey)
          .then((projectArray) => setProjects(projectArray));
        console.warn('im okay');
        break;
      default:
    }
  };

  const editCard = (fbKey) => (
    <div className='editbtns'>
      <Button style={{ backgroundColor: '#CBBEB5' }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i> Delete</Button>
      <Button
      style={{
        backgroundColor: '#CBBEB5',
        justifyContent: 'center'
      }} onClick={() => handleClick(fbKey, 'edit')}>
      <i className="far fa-edit"></i>
    {editing ? 'Close Form' : ' Edit'}
    </Button>
    </div>
  );

  return (
    projects.map((projectInfo) => (
      <Card key={projectInfo.firebaseKey}>
        <CardBody>
          <CardTitle tag="h5">{projectInfo.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{projectInfo.technologiesUsed}</CardSubtitle>
        </CardBody>
        <img width="100%" src={projectInfo.screenshot} alt="Card image cap" />
        <CardBody>
          <CardText>{projectInfo.description}</CardText>
          <CardLink href={projectInfo.url}>Netlify</CardLink>
          <CardLink href={projectInfo.githubUrl}>Github</CardLink>
          { admin && editCard(projectInfo.firebaseKey) }
         {
         editing && <ProjectsForm
         formTitle='Edit Project'
         setProjects={setProjects}
         firebaseKey={projectInfo.firebaseKey}
         githubUrl={projectInfo.githubUrl}
         screenshot={projectInfo.screenshot}
         technologiesUsed={projectInfo.technologiesUsed}
         title={projectInfo.title}
         url={projectInfo.url}
         />
         }
        </CardBody>
      </Card>
    ))
  );
};

ProjectsCard.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
export default ProjectsCard;
