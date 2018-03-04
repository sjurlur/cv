import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import * as cv from '../data/cv.json';
import Cube from './cube/cube';

injectGlobal`
* {font-family: 'Lato', sans-serif;}
body {background: #B7D8A8}
`;

const LayoutContainer = styled.div``;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCube: undefined,
    };
  }

  openCube = id => {
    if (this.state.openCube === id) {
      this.setState({ openCube: undefined });
    } else {
      this.setState({ openCube: id });
    }
  };

  render() {
    const cubes = cv.cubes.map((data, index) => (
      <Cube id={data.id} faces={data.faces} openCube={this.openCube} number={index} open={this.state.openCube === data.id} />
    ));

    return <LayoutContainer>{cubes}</LayoutContainer>;
  }
}

export default App;
