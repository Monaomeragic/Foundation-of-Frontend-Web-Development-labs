// Home.jsx
import React from 'react';
import { Container, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import profilePic from '../images/profile.jpg'; // Ensure the path is correct
import MyComponent from './MyComponent';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

const ProfileContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
}));

const ProfileText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '600px',
}));

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ProfileContainer>
        <ProfileAvatar alt="Profile Picture" src={profilePic} />
        <ProfileText variant="h4">Welcome to My Portfolio</ProfileText>
        <ProfileText variant="body1">
          Hi, I'm MOna, a passionate web developer with a love for creating beautiful and functional web applications. 
          Feel free to explore my work and get in touch if you’d like to collaborate on a project.
        </ProfileText>
        <MyComponent />
      </ProfileContainer>
    </ThemeProvider>
  );
}

export default Home;
