import { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Avatar,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import {
  DrawerItem,
  ListItemTextItem,
  ProjectTextItem,
  StyledAccount,
} from './sidebar.styled';
import AddProjectModal from '../AddProject';
import { account } from '../../fake';
import NAV_LIST from '../../constants/nav';
import Logo from '../Common/Logo';
import { NavItem } from '../Common/Nav';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <DrawerItem variant="permanent" anchor="left">
        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
          <Logo />
        </Box>
        <Box sx={{ mb: 2, mx: 2.5 }}>
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'custom.white' }}>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: '#e2e2e2', fontSize: '10px' }}>
                {account.role.toUpperCase()}
              </Typography>
            </Box>
          </StyledAccount>
        </Box>
        <List
          disablePadding
          sx={{
            p: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem',
          }}
        >
          {NAV_LIST.map((item: any) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
        <Divider />
        <List sx={{ fontSize: '1.1rem', paddingLeft: '0.4rem' }}>
          <ProjectTextItem sx={{ color: 'custom.white' }}>
            <NavLink to="/myproject">
              Projects
              <NavLink to="/projects/addProject">
                <IconButton onClick={handleOpen} sx={{ marginLeft: '2rem' }}>
                  <Add sx={{ fontSize: 24, color: 'custom.white' }} />
                </IconButton>
                <AddProjectModal open={open} handleClose={handleClose} />
              </NavLink>
            </NavLink>
          </ProjectTextItem>
          {['project-A', 'Project1', 'Team 5'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ fontSize: '16px' }}>
                <ListItemTextItem primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerItem>
    </Box>
  );
};

export default Sidebar;
