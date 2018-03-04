import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
  position: absolute;
  width: 2em;
  height: 2em;
  //background: ${props => getColor(props.face)};
  background-color: rgba(255, 255, 255, ${props => (props.open ? 1 : 0.8)});
  border: 1px solid #2a1e5c;
  color: #2a1e5c;
  transform: ${props => getTransform(props.face, props.open)};
  opacity: ${props => getOpacity(props.face, props.open)};
  transition: 0.5s;
`;

const CloseButton = styled.button`
  border-radius: 100em;
  border: 1px solid #2a1e5c;
  padding: 5px;
  position: absolute;
  top: 3px;
  right: 3px;
  height: 2em;
  width: 2em;
  font-size: 0.15em;
  line-height: 1em;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #2a1e5c;
  }
`;

function getTransform(face, open) {
  switch (face) {
    case 'front':
      return 'translateZ(1em)';
    case 'top':
      return open ? 'rotateX(0) rotateZ(0) translateZ(1em) translateY(-2em)' : 'rotateX( 90deg) rotateZ(90deg) translateZ(1em)';
    case 'right':
      return open ? 'rotateY(0) translateX(2em) translateZ(1em)' : 'rotateY( 90deg) translateZ(1em)';
    case 'left':
      return open ? 'rotateY(0) translateX(-2em) translateZ(1em)' : 'rotateY(-90deg)  translateZ(1em)';
    case 'bottom':
      return 'rotateX(-90deg)  translateZ(1em)';
    case 'back':
      return 'rotateY(-180deg) translateZ(1em)';
    default:
      break;
  }
}

function getOpacity(face, open) {
  if (open) {
    switch (face) {
      case 'bottom':
        return '0';
      case 'back':
        return '0';
      default:
        return '1';
    }
  }
  return '1';
}

function getColor(face) {
  switch (face) {
    case 'front' || 'back':
      return '#FF6663';
    case 'top' || 'bottom':
      return '#FEFF38';
    case 'left' || 'right':
      return '#20BF55';
    default:
      break;
  }
}

export default props => {
  const closeButton = props.open && props.face === 'top' ? <CloseButton aria-label="lukk">X</CloseButton> : null;
  return (
    <Side face={props.face} open={props.open}>
      {closeButton}
      {props.children}
    </Side>
  );
};
