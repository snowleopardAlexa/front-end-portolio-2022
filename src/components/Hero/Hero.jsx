import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
//import Image from 'next/image';

const Hero = (props) => {
  return (
    <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I Alexa! <br />
        Welcome to my portfolio
      </SectionTitle>
      
      <SectionText>
        Hi! I am Aleksandra Slomska, but friends called me Alexa. 
        I have been coding for 4 years and I have an extensive knowledge of front-end technologies.
        This is my Front-end portolio. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
  );
}

export default Hero;