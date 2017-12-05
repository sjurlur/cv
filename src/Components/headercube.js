import React from 'react';
import styled from 'styled-components';

const Text = styled.h2 `
    font-size: 2rem;
    text-align: center;
    margin: 0;
`;

export default props => {
    return <Text>{props.data}</Text>
}