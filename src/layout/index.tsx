import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import MainComponent from './layout.styled';
import Sidebar from '../components/Sidebar';

const Layout = () => (
  <Box sx={{
    display: 'flex', backgroundColor: 'custom.background', height: '100vh', width: '100vw',
  }}
  >
    <Sidebar />
    <MainComponent component="main">
      <Outlet />
    </MainComponent>
  </Box>
);

export default Layout;
