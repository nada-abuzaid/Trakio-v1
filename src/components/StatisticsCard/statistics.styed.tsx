import {
  Card, styled, CardContent,
} from '@mui/material';

export const StatisticsBox = styled(Card)(({ theme: { palette: { custom } } }) => ({
  marginTop: '0.93rem',
  backgroundColor: custom.divider,
  color: custom.white,
  borderRadius: '0.93rem',
  width: '100%',
}));

export const StatisticsContent = styled(CardContent)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}));
