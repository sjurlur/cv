import React from 'react';
import styled from 'styled-components';
import Face from './face';
import HeaderComp from './facetypes/header';
import TextComp from './facetypes/text';
import ImageComp from './facetypes/image';

const Cube = styled.button `
transform-style: preserve-3d;
transform: ${props => getTransform(props.number)};
padding: 0;
border: 0;
text-align: initial;
line-height: normal;
overflow: visible;
padding: 0;
border-radius: 0;
font: initial;
font-size: 5em;
display: block;
cursor: pointer;
text-rendering: initial;
color: initial;
letter-spacing: initial;
word-spacing: initial;
text-transform: initial;
text-indent: initial;
text-shadow: initial;
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

function getComponentForType(type) {
    switch(type) {
        case 'header':
            return HeaderComp;
        case 'text':
            return TextComp;
        case 'image':
            return ImageComp;
        default:
            break; 
    }
}

export default props => {
    let faces = ['top', 'front', 'left', 'right', 'back', 'bottom'];
    const cubeFaces = faces.map((face, index) => {
        let Comp = undefined;
        if (props.faces && props.faces[index]) {
            Comp = getComponentForType(props.faces[index].type);
        }
        return (<Face face={face}>{Comp ? <Comp data={props.faces[index].data}/> : null}</Face>)
    });
    
    return (
      <Cube number={props.number}>
        {cubeFaces}
      </Cube>
    )
}