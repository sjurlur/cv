import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import * as cv from '../data/cv.json';
import Cube from './cube/cube';

injectGlobal`
* {font-family: 'Lato', sans-serif;}
body {background: papayawhip}
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  padding: 10rem;
`;

class App extends Component {
  render() {
    const cubes = cv.cubes.map((data, index) => <Cube faces={data.faces} number={index} />);

    return <LayoutContainer>{cubes}</LayoutContainer>;
  }
}

export default App;
