import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import * as cv from '../data/cv.json';
import Cube from './cube/cube';

injectGlobal`
* {font-family: 'Lato', sans-serif;}
body {background: #B7D8A8}
ul {padding-left: 1.7em;}
`;

const LayoutContainer = styled.div``;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  cursor: pointer;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCube: undefined,
    };
  }

  componentDidMount = () => {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        this.setState({ openCube: undefined });
      }
    });
  };

  openCube = id => {
    if (this.state.openCube === id) {
      this.setState({ openCube: undefined });
    } else {
      this.setState({ openCube: id });
    }
  };

  render() {
    const overlay = this.state.openCube ? (
      <Overlay
        onClick={() => {
          this.openCube(undefined);
        }}
      />
    ) : null;
    const cubes = cv.cubes.map((data, index) => (
      <Cube id={data.id} faces={data.faces} openCube={this.openCube} number={index} open={this.state.openCube === data.id} />
    ));

    return (
      <LayoutContainer>
        {overlay}
        {cubes}
      </LayoutContainer>
    );
  }
}

export default App;
