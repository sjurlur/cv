import React from 'react';
import styled from 'styled-components';
import Side from './side';
import HeaderComp from './headercube';
import TextComp from './text';
import ImageComp from './image';

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
        return (<Side face={face}>{Comp ? <Comp data={props.faces[index].data}/> : null}</Side>)
    });
    
    return (
        <Cube number={props.number}>
        {cubeFaces}
      </Cube>
    )
}