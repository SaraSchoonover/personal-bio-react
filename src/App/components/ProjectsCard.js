import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../../helpers/data/projectData';
import ProjectsForm from '../../forms/ProjectsForm';

const ProjectsCard = ({
  firebaseKey,
  projects,
  setProjects,
  admin
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey)
          .then((projectArray) => setProjects(projectArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nope');
    }
  };

  const editCard = () => (
    <>
      <h1>I WORK</h1>
    </>
  );

  return (
    projects.map((projectInfo) => (
        <Card
        key={projectInfo.firebaseKey}
        style={{
          width: '20rem',
          flex: 'initial',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
         <CardTitle tag="h5">Project Name: {projectInfo.title}</CardTitle>
         <CardText>url: {projectInfo.url}</CardText>
         <CardText>Github Url: {projectInfo.githubUrl}</CardText>
         <CardText>Technologies Used: {projectInfo.technologiesUsed}</CardText>
         <img style={{ width: '16rem' }} src={projectInfo.screenshot} className="photo" alt="Card image cap" />
         <Button style={{ backgroundColor: '#ffa64d' }} onClick={() => handleClick('delete')}>Delete Project</Button>
      <Button style={{ backgroundColor: '#004d1a' }} onClick={() => handleClick('edit')}>
    {editing ? 'Close Form' : 'Edit Project'}
    </Button>
         <CardBody>
         { admin && editCard() }
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
  firebaseKey: PropTypes.string,
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
export default ProjectsCard;
