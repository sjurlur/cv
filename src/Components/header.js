import React from 'react';
import styled from 'styled-components';
import Meta from './meta';

export default props => {
  const Header = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
  `;
  const HeaderTag = styled.h1`
    font-size: 3rem;
    margin-top: 0;
  `;
  return (
    <Header>
      <HeaderTag>{props.cv.name}</HeaderTag>
      <Meta data={props.cv.meta} />
    </Header>
  );
};
