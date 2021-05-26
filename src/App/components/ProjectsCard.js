import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardLink,
  CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { deleteProject } from '../../helpers/data/projectData';
import ProjectsForm from '../../forms/ProjectsForm';
import netlifyIcon from '../../assets/netlifyIcon.png';
import githubLogoReal from '../../assets/githubLogo.png';

const ProjectsCard = ({
  projects,
  setProjects,
  admin,
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

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
    <>
      <Button onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i> Delete</Button>
      <Button onClick={() => handleClick(fbKey, 'edit')}>
      <i className="far fa-edit"></i>
    {editing ? 'Close Form' : ' Edit'}
    </Button>
    </>
  );

  return (
    projects.map((projectInfo) => (
        <Card
        style={{
          width: '23rem',
          flex: 'initial',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        key={projectInfo.firebaseKey}
        >
          <CardBody>
         <CardTitle tag="h5">Project Name: {projectInfo.title}</CardTitle>
         <CardLink target="_blank" href={projectInfo.url}><img src={netlifyIcon} alt="netlify button"/></CardLink>
         <CardLink target="_blank" href={projectInfo.githubUrl}><img src={githubLogoReal} alt="netlify button"/></CardLink>
         <CardText>Technologies Used: {projectInfo.technologiesUsed}</CardText>
         <img style={{ width: '16rem' }} src={projectInfo.screenshot} className="photo" alt="Card image cap" />
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
  // firebaseKey: PropTypes.string,
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
export default ProjectsCard;
