import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';

const data = [
  { number: 3900, text: 'Total GitHub Commits'},
  { number: 20, text: 'Projects I am proud of', },
  { number: 201, text: 'Total Github Repositories'},
  { number: 10, text: 'Technologies and Frameworks'}
];

const Accomplishments = () => {
  return (
   <Section id="achievements">
    <SectionDivider />
     <SectionTitle>Personal Achievements</SectionTitle>
     <Boxes>
       {data.map((card, index) => (
         <Box key={index}>
           <BoxNum>{`${card.number}+`}</BoxNum>
           <BoxText>{card.text}</BoxText>
         </Box>
       ))}
     </Boxes>
   </Section>
  );
}

export default Accomplishments;