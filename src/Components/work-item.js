import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.h3`margin-bottom: 0.25rem;`;
const ListItem = styled.li`margin-bottom: 1.5rem;`;
export default props => {
  return (
    <ListItem>
      {props.data.img ? <img src={require(`./${props.data.img}`)} /> : null}
      <HeaderTag>
        {props.data.header} ({props.data.date})
      </HeaderTag>
      <p>{props.data.description}</p>
    </ListItem>
  );
};
