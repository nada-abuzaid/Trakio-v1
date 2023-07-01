/* eslint-disable no-unused-vars */
import { CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  WrappBtnDone,
  Wrapper2,
  WrapperBtnUD,
  WrapperDes,
  WrapperPN,
  WrappBtn,
} from './cards.styled';
import { iProjects, iProjectTasks } from '../../interfaces';
import { ErrorAlert } from '..';

const ProjectsCard = () => {
  const [userProjects, setUserProjects] = useState<iProjects[]>([]);
  const [projectTasks, setProjectTasks] = useState<iProjectTasks[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  // useEffect(() => {
  //   axios.get(`/api/project/${project_id}}/task`)
  //     .then((task) => {
  //       console.log(task);
  //       setProjectTasks(task.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [userProjects]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      {userProjects.map((project: iProjects) => (
        <Wrapper2>
          <CardContent>
            <WrapperPN>{project.role}</WrapperPN>
            <Typography gutterBottom variant="h6" component="div">
              {project.title}
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              {project.description}
            </WrapperDes>
          </CardContent>
          <WrappBtn>
            <WrapperBtnUD>todo</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </WrappBtn>
        </Wrapper2>
      ))}
    </>
  );
};

export default ProjectsCard;
