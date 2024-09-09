import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaRobot } from "react-icons/fa";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills & Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies and have an array of skills and I am always trying to learn more.
    </SectionText>
    <List>
      <ListItem>
        <FaRobot size="3rem" />
        <ListContainer>
          <ListTitle>Cybersecurity</ListTitle>
          <ListParagraph>
            Vast knowledge <br />
            that grows every day
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaRobot size="3rem" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            JavaScript, React.js,<br />
            SQL 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaRobot size="3rem" />
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Windows and Linux proficent
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
