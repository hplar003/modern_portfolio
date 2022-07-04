import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle  main center>
        Hi, Welcome to<br/>
         <p>my Portfolio</p>
      </SectionTitle>
      <SectionText>
        <p>Ralph Winston D. Maronilla</p> 
        <p>Web Developer</p>
      </SectionText>
     
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;