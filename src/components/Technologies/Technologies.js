import React from 'react';
import { DiFirebase, DiReact, DiZend,DiPhp } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in web development world</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Knowledge with react.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem >
        <DiPhp size='3rem' /> 
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Knowledge with PHP,Laravel and Relational Database </ListParagraph>
        </ListContainer>
      </ListItem>
     
    </List>
  </Section>
);

export default Technologies;
