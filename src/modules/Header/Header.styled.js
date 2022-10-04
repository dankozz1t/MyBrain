import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// export const LogTheme = styled('a')(({ theme }) => {
//   console.log(theme);
// });

export const LinkNav = styled(NavLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',

  '&.active': {
    boxShadow: theme.shadows[6],
  },
}));
