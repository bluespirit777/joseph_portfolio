import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        With a solid foundation in IT and cybersecurity, I bring a unique blend of technical expertise and proactive problem-solving skills to ensure robust system security and seamless operations for your organization.
      </SectionText>
      <Button onClick={() => window.open('/resume.pdf', '_blank')}>
        View My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;