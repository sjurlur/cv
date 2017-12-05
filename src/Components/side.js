import React from 'react';
import styled from 'styled-components';

const Side = styled.div `
position: absolute;
width: 2em;
height: 2em;
background: ${props => getColor(props.face)};
//border: 1px solid #2a1e5c;
color: #2a1e5c;
transform: ${props => getTransform(props.face)};
`;

function getTransform(face) {
    switch(face) {
        case 'front':
            return 'translateZ(1em)';
        case 'top':
            return 'rotateX( 90deg) rotateZ(90deg) translateZ(1em)';
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

function getColor(face) {
    switch(face) {
        case 'front' || 'back':
            return '#FF6663';
        case 'top' || 'bottom':
            return '#FEFF38';
        case 'left' || 'right':
            return '#20BF55';
    }
}

export default props => {
    return (<Side face={props.face}>{props.children}</Side>)
}