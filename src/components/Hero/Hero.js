import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br/>
        Rishabh Chauhan
      </SectionTitle>
      <SectionText>
      I’m a Web Developer & {'<'}Programmer{'>'} living in India. I<br/>
      Make Web Applications, usually with JS.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/13FRK0vXBDLzGytta6N5HrjnB-cbJ5dRj/view?usp=sharing'}>
        Learn More
      </Button>
    </LeftSection>

  </Section>

);

export default Hero;