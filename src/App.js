import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import * as cv from './cv.json';
import Header from './Components/header';
import Experience from './Components/experience';
import sjur from './Components/sjur.jpg';

injectGlobal`
* {font-family: 'Lato', sans-serif;}
`;

const LayoutContainer = styled.div`
  margin: 2rem 1rem;
  display: grid;
  max-width: 750px;
  grid-template-columns: auto;

  @media screen and (min-width: 600px) {
    grid-template-columns: 150px auto;
    grid-column-gap: 50px;
  }
`;

const Image = styled.img`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

class App extends Component {
  render() {
    return (
      <LayoutContainer>
        <Image src={sjur} alt="Sjur Seibt" />
        <Header cv={cv} />
        <Experience data={cv} />
      </LayoutContainer>
    );
  }
}

export default App;
