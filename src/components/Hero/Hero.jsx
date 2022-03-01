import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  return (
    <Section>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Alexa! <br />
        Welcome to my portfolio
      </SectionTitle>
      <SectionText>
        Hi! I am Aleksandra Slomska, but friends call me Alexa. 
        This is my Front-end portolio. I am a proud moma of a fur baby Kion The Lion King.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/aleksandra-slomska-1039681b3/'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
  );
}

export default Hero;