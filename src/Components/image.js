import React from 'react';
import styled from 'styled-components';
import Sjur from './sjur.jpg';
import Teknosykkelen from './teknosykkelen.jpg'
const Image = styled.img `
max-width: 100%;
`

export default props => {
    return(<Image src={Sjur} />);
}