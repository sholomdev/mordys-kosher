import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import '@fontsource/josefin-sans';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </>
  );
}
