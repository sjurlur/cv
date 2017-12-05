import React from 'react';
import styled from 'styled-components';
import Side from './side';

const Cube = styled.div `
font-size: 5em;
width: 2em;
margin: 1.5em auto;
transform-style: preserve-3d;
transform: ${props => getTransform(props.number)};
`;

function getRowNumber(num, maxRowWidth) {
    let number = num;
    let rowNumber = 0;
    let counter = 1;

    while(number >= 0) {
        number -= counter;
        counter += 1;
        rowNumber += 1;
    }

    return rowNumber -1;
}

function getTransform(number) {
    const baseRotation = 'rotateX(-45deg) rotateY(45deg)'
    const offset = 2;
    if (number===0) {
        return baseRotation;
    }

    else if (number===1) {
        return `${baseRotation} translateX(-${getRowNumber(number) * offset}em) translateY(${getRowNumber(number) * offset}em) translateZ(0)`;
    }
    else if (number===2) {
        return `${baseRotation} translateX(0) translateY(${getRowNumber(number) * offset}em) translateZ(${getRowNumber(number) * offset}em)`;
    }

    else if (number===3) {
        return `${baseRotation} translateX(-${getRowNumber(number) * offset}em) translateY(${getRowNumber(number) * offset}em) translateZ(0)`;
    }
    else if (number===4) {
        return `${baseRotation} translateX(-${offset}em) translateY(${getRowNumber(number) * offset}em) translateZ(${offset}em)`;
    }
    else if (number===5) {
        return `${baseRotation} translateX(0) translateY(${getRowNumber(number) * offset}em) translateZ(${getRowNumber(number) * offset}em)`;
    }

    else if (number===6) {
        return `${baseRotation} translateX(-${2*offset}em) translateY(${3*offset}em) translateZ(${offset}em)`;
    }
    else if (number===7) {
        return `${baseRotation} translateX(-${offset}em) translateY(${3*offset}em) translateZ(${2*offset}em)`;
    }

    else if (number===8) {
        return `${baseRotation} translateX(-${2*offset}em) translateY(${4*offset}em) translateZ(${2*offset}em)`;     
    }

}

export default props => {
    return (
        <Cube number={props.number}>
        <Side plane="front">1</Side>
        <Side plane="back">6</Side>
        <Side plane="right">4</Side>
        <Side plane="left">3</Side>
        <Side plane="top">5</Side>
        <Side plane="bottom">2</Side>
      </Cube>
    )
}