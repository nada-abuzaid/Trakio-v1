import { useState } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Typography,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import {
  DrawerItem,
  ListItemTextItem,
  ProjectTextItem,
} from './sidebar.styled';
import AddProjectModal from '../AddProject';
import NAV_LIST from '../../constants/nav';
import Logo from '../Common/Logo';
import { NavItem, StyledNavItem } from '../Common/ListItem';
import UserCard from '../UserCard';
import { projects } from '../../fake';

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
          <UserCard />
        </Box>
        <List
          disablePadding
          sx={{
            p: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem',
          }}
        >
          {NAV_LIST.map(({ title, path, icon }: any) => (
            <NavItem key={title} path={path} title={title} icon={icon} />
          ))}
        </List>
        <List
          disablePadding
          sx={{
            p: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem',
          }}
        >
          <Typography sx={{ color: 'custom.fontGray' }}>
            Projects
          </Typography>
          {projects.map(({ title, path }) => (
            <NavItem
              path={path}
              title={title}
            />
          ))}
        </List>
      </DrawerItem>
    </Box>
  );
};

export default Sidebar;
