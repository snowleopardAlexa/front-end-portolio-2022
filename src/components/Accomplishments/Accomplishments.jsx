import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3900, text: 'Total GitHub Commits'},
  { number: 20, text: 'Projects I am proud of', },
  { number: 201, text: 'Total Repositories'},
  { number: 15, text: 'Technologies and Frameworks I built with'}
];

const Accomplishments = () => {
  return (
   <Section>
     <SectionTitle>Personal Achievements</SectionTitle>
     <Boxes>
       {data.map((card, index) => (
         <Box key={index}>
           <BoxNum>{`${card.number}+`}</BoxNum>
           <BoxText>{card.text}</BoxText>
         </Box>
       ))}
     </Boxes>
     <SectionDivider />
   </Section>
  );
}

export default Accomplishments;