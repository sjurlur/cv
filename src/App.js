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
  display: grid;
  grid-template-columns: 150px 500px;
  grid-column-gap: 50px;
`;

const Image = styled.img`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
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
