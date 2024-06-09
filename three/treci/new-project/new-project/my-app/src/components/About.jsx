import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

const AboutText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
}));

function About() {
  return (
    <AboutContainer>
      <AboutText variant="h4">About Me</AboutText>
      <AboutText variant="body1">
        I'm a dedicated web developer with experience in building modern web applications using React, MUI, and other technologies.
      </AboutText>
    </AboutContainer>
  );
}

export default About;
