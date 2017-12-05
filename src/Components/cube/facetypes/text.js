import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 0.5rem;
  padding: 0.5rem;
  height: 100%;
`;

export default props => {
  return <Text dangerouslySetInnerHTML={{ __html: props.data }} />;
};
