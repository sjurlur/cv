import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import * as cv from './cv.json';
import Cube from './Components/cube';

injectGlobal`
* {font-family: 'Lato', sans-serif;}
`;

const LayoutContainer = styled.div`
  margin: 2rem 1rem;
`;


class App extends Component {
  render() {
    return (
      <LayoutContainer>
        <Cube number={0}/>

        <Cube number={1}/>
        <Cube number={2}/> 
        
        <Cube number={3}/>  
        <Cube number={4}/>  
        <Cube number={5}/>

        <Cube number={6}/> 
        <Cube number={7}/>

        <Cube number={8}/>   
        

      </LayoutContainer>
    );
  }
}

export default App;
