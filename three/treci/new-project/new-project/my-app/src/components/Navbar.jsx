import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
});

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit">
          <StyledLink to="/">Home</StyledLink>
        </Button>
        <Button color="inherit">
          <StyledLink to="/about">About</StyledLink>
        </Button>
        <Button color="inherit">
          <StyledLink to="/contact">Contact</StyledLink>
        </Button>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

