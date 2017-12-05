import React from 'react';
import styled from 'styled-components';

const Side = styled.div `
position: absolute;
width: 2em;
height: 2em;
background: white;
border: 1px solid rgba(0,0,0,.5);
color: #2a1e5c;
text-align: center;
line-height: 2em;
transform: ${props => getTransform(props.plane)};
`;

function getTransform(plane) {
    switch(plane) {
        case 'front':
            return 'translateZ(1em)';
        case 'top':
            return 'rotateX( 90deg) translateZ(1em)';
        case 'right':
            return 'rotateY( 90deg)  translateZ(1em)';
        case 'left':
            return 'rotateY(-90deg)  translateZ(1em)';
        case 'bottom':
            return 'rotateX(-90deg)  translateZ(1em)';
        case 'back':
            return 'rotateY(-180deg) translateZ(1em)';
        default:
            break;
    }
}

function getColor(plane) {
    switch(plane) {
        case 'front':
            return '#2A1E5C';
        case 'top':
            return '#FEFF38';
        case 'right':
            return '#20BF55';
        case 'left':
            return '#FF6663';

    }
}

export default props => {
    return (<Side plane={props.plane}></Side>)
}