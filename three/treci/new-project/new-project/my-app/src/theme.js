// theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change primary color
    },
    secondary: {
      main: '#f50057', // Change secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Change default font family
  },
});

export default theme;
