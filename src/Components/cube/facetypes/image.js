import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${props => (props.open ? 1 : 0.7)};
  background: url('${props => props.url}');
  background-size: cover;
`;

export default props => {
  return <Image open={props.open} url={props.data} />;
};
