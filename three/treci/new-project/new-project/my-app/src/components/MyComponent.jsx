import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme(); // Access the theme

  return (
    <Button 
      variant="contained" 
      style={{ 
        backgroundColor: theme.palette.primary.main, 
        color: theme.palette.primary.contrastText 
      }}
    >
      Primary Button
    </Button>
  );
}

export default MyComponent;
