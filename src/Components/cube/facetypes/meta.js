import React from 'react';
import styled from 'styled-components';

const DefinitionList = styled.dl``;
const DefinitionTerm = styled.dt`
  font-weight: 700;
`;
const DefinitionItem = styled.dd``;

export default props => {
  return (
    <DefinitionList>
      <DefinitionTerm>Født</DefinitionTerm>
      <DefinitionItem>{props.data.born}</DefinitionItem>
      <DefinitionTerm>Adresse</DefinitionTerm>
      <DefinitionItem>{props.data.address}</DefinitionItem>
      <DefinitionTerm>Epost</DefinitionTerm>
      <DefinitionItem>
        <a href={`mailto:${props.data.mail}`}>{props.data.mail}</a>
      </DefinitionItem>
      <DefinitionTerm>Telefon</DefinitionTerm>
      <DefinitionItem>
        <a href={`tel:${props.data.phone}`}>{props.data.phone}</a>
      </DefinitionItem>
    </DefinitionList>
  );
};
