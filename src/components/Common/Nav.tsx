import {
  ListItemButton,
  ListItemIcon,
  styled,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledNavItem:any = styled(
  (props) => <ListItemButton disableGutters {...props} />,
)(({ theme }):any => ({
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.custom.white,
  borderRadius: theme.shape.borderRadius,
  fontFamily: 'Poppins',
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NavItem = ({ item: { title, path, icon } }: any) => (
  <ListItemButton
    component={NavLink}
    to={path}
    sx={{
      '&.active': {
        color: 'custom.white',
        bgColor: 'custom.selected',
        fontWeight: 'fontWeightBold',
      },
      '&:hover': { bgColor: 'custom.selected' },
    }}
  >
    <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
    <ListItemText disableTypography primary={title} />
  </ListItemButton>
);
