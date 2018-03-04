import React from 'react';
import styled from 'styled-components';
import Face from './face';
import HeaderComp from './facetypes/header';
import TextComp from './facetypes/text';
import ImageComp from './facetypes/image';
const Button = styled.div`
  font-size: 5em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    animation: push 0.3s;
    transform-style: preserve-3d;

    div div:first-child {
      background-color: #cae2bf;
    }
  }

  @keyframes push {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.2em);
    }
  }
`;

const Cube = styled.div`
  transform-style: preserve-3d;
  transform: ${props => getTransform(props.number, -45, 45)};
  margin: 1.5em auto;
  width: 2em;
  }
`;

function getRowNumber(num, maxRowWidth) {
  let number = num;
  let rowNumber = 0;
  let counter = 1;

  while (number >= 0) {
    number -= counter;
    counter += 1;
    rowNumber += 1;
  }

  return rowNumber - 1;
}

function getTransform(number, rotateX, rotateY) {
  const baseRotation = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  const offset = 2;
  if (number === 0) {
    return baseRotation;
  } else if (number === 1) {
    return `${baseRotation} translateX(-${getRowNumber(number) * offset}em) translateY(${getRowNumber(number) * offset}em) translateZ(0)`;
  } else if (number === 2) {
    return `${baseRotation} translateX(0) translateY(${getRowNumber(number) * offset}em) translateZ(${getRowNumber(number) * offset}em)`;
  } else if (number === 3) {
    return `${baseRotation} translateX(-${getRowNumber(number) * offset}em) translateY(${getRowNumber(number) * offset}em) translateZ(0)`;
  } else if (number === 4) {
    return `${baseRotation} translateX(-${offset}em) translateY(${getRowNumber(number) * offset}em) translateZ(${offset}em)`;
  } else if (number === 5) {
    return `${baseRotation} translateX(0) translateY(${getRowNumber(number) * offset}em) translateZ(${getRowNumber(number) * offset}em)`;
  } else if (number === 6) {
    return `${baseRotation} translateX(-${2 * offset}em) translateY(${3 * offset}em) translateZ(${offset}em)`;
  } else if (number === 7) {
    return `${baseRotation} translateX(-${offset}em) translateY(${3 * offset}em) translateZ(${2 * offset}em)`;
  } else if (number === 8) {
    return `${baseRotation} translateX(-${2 * offset}em) translateY(${4 * offset}em) translateZ(${2 * offset}em)`;
  }
}

function getComponentForType(type) {
  switch (type) {
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
  let faces = ['top', 'left', 'front', 'right', 'back', 'bottom'];
  const cubeFaces = faces.map((face, index) => {
    let Comp = undefined;
    if (props.faces && props.faces[index]) {
      Comp = getComponentForType(props.faces[index].type);
    }
    return <Face face={face}>{Comp ? <Comp data={props.faces[index].data} /> : null}</Face>;
  });

  return (
    <Button>
      <Cube number={props.number} onClick={() => {}}>
        {cubeFaces}
      </Cube>
    </Button>
  );
};
