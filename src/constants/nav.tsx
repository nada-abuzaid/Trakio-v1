import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NAV_LIST = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
  {
    title: 'Tasks',
    path: '/mytask',
    icon: (
      <FormatListNumberedIcon sx={{ fontSize: 24, color: 'custom.white' }} />
    ),
  },
  {
    title: 'Account',
    path: '/account',
    icon: <AccountCircleIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
];

export default NAV_LIST;
