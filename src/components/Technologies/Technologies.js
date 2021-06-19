import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech"> 
    <SectionDivider/>
    <br/>
    <br/> 
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Technologies in the web development World.
      From Back-End to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph> 
            Languages I speak <br/>
            JavaScript,
            React.js and
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph> 
            Experience with <br/>
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>Things I Design</ListTitle>
          <ListParagraph> 
            Enjoy Designing <br/>
            UI, UX, Web, Logos
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>


  </Section>
);

export default Technologies;
