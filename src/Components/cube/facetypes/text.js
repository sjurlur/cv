import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 0.5rem;
  padding: 0;
  height: 100%;
  overflow: hidden;
`;

const Data = styled.div`
  padding: 0.5rem;

  h3 {
    margin: 0.2rem 0;
  }
`;

export default props => {
  return (
    <Wrapper>
      <Data dangerouslySetInnerHTML={{ __html: props.data }} />
    </Wrapper>
  );
};
