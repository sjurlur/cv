import React from 'react';
import styled from 'styled-components';
import WorkItem from './work-item';

const Experience = styled.div`grid-column-start: 2;`;
const Section = styled.section`margin-bottom: 4rem;`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
const HeaderTag = styled.h2`font-size: 2rem;`;

export default props => {
  const work = props.data.workExperience.map(el => <WorkItem data={el} />);
  const education = props.data.education.map(el => <WorkItem data={el} />);
  const projects = props.data.projects.map(el => <WorkItem data={el} />);
  return (
    <Experience>
      <Section>
        <HeaderTag>Prosjekter</HeaderTag>
        <List>{projects}</List>
      </Section>
      <Section>
        <HeaderTag>Praksis</HeaderTag>
        <List>{work}</List>
      </Section>
      <Section>
        <HeaderTag>Utdannelse</HeaderTag>
        <List>{education}</List>
      </Section>
    </Experience>
  );
};
