import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
  font-size: 1.5rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default props => {
  return (
    <Wrapper>
      <Text>{props.data}</Text>
    </Wrapper>
  );
};
