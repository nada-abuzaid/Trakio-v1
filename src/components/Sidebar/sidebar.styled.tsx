import { Drawer, ListItemText, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import drawerWidth from '../../constants';

export const DrawerItem = styled(Drawer)(({ theme: { palette: { secondary } } }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: secondary.main,
  },
}));

export const ListItemTextItem = styled(ListItemText)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  opacity: 1,
}));

export const ProjectTextItem = styled(ListItemText)(({ theme: { palette: { custom } } }) => ({
  marginLeft: '18px',
  color: custom.white,
  '& span': {
    fontSize: '1.1rem',
  },
}));

export const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
