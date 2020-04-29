import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';
import './App.css';

// pages
import { HomePage } from 'pages/Home/HomePage';
import { ProfileList } from 'pages/ProfileList/ProfileList';

// components
import { Navigation } from 'components/Navigation/Navigation';

const App = () => {
  return (
    <Root>
      <Navigation/>
      <Container>
        <HomePage/>
        <ProfileList/>
      </Container>
    </Root>
  );
}

export default App;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - ${theme.offset}px);
`;

const Root = styled.div`
    min-height: 100vh;
    max-height: 100vh;
`;



