import {
  Box,
  List,
  Typography,
} from '@mui/material';
import { MdLogout } from 'react-icons/md';
import {
  DrawerItem,
} from './sidebar.styled';
import NAV_LIST from '../../constants/nav';
import Logo from '../Common/Logo';
import { NavItem } from '../Common/ListItem';
import UserCard from '../UserCard';
import { projects } from '../../fake';

const Sidebar = () => (
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
      <Box sx={{ mb: 2, mx: 1 }}>
        <Typography sx={{ color: 'custom.fontGray' }}>
          Others
        </Typography>
        <NavItem path="/logout" title="Logout" icon={<MdLogout />} />
      </Box>
    </DrawerItem>
  </Box>
);

export default Sidebar;
