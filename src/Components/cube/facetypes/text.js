import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 0.5rem;
  padding: 0.5rem;
`;

export default props => {
  return <Text>{props.data}</Text>;
};
