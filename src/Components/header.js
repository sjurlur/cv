import React from 'react';
import sjur from './sjur.jpg';
import styled from 'styled-components';
import Meta from './meta';
const Header = props => {
  const HeaderTag = styled.h1`font-size: 3rem;`;
  return (
    <header className="App-header">
      {/*<img src={sjur} alt="Sjur Seibt" />*/}
      <HeaderTag>{props.cv.name}</HeaderTag>
      <Meta data={props.cv.meta} />
    </header>
  );
};

export default Header;
