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
      I am a dedicated student passionate about launching a career in IT. I continuously expand my expertise through certifications, hands-on projects, and academic coursework. With strong problem-solving skills and a diligent work ethic, I thrive in tackling complex challenges and delivering effective solutions.
      </SectionText>
      <Button onClick={() => window.open('/resume.pdf', '_blank')}>
        View My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;