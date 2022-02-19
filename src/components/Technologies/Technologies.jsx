import { BsPenFill } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { MdDesignServices } from 'react-icons/md';
import { GrGraphQl } from 'react-icons/gr';
import { FaDatabase } from 'react-icons/fa';
import { FaSketch } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => {
  return (
   <Section id="tech">
     <SectionDivider />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
       I have worked with a range of technolgies building side projects as well as 
       freelancing and building the projects for non-profit organizations. I'm specializing in a Front-End Development 
       and I'm an avid Notes Taker. 
     </SectionText>
     <List>
       <ListItem>
         <CgWebsite size="3rem" />
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
           <ListParagraph>
             Experience with <br />
             HTML5, CSS3 / SCSS, JavaScript + ES6
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiReact size="3rem" />
         <ListContainer>
           <ListTitle>Front-End Frameworks</ListTitle>
           <ListParagraph>
             Experience with <br />
             React.js, Angular, Next.js
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <MdDesignServices size="3rem" />
         <ListContainer>
           <ListTitle>UI Frameworks</ListTitle>
           <ListParagraph>
             Experience with <br />
             Bootstrap, MaterialUI, SemanticUI, Ant-Design, Tailwind, Styled Components
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <FaDatabase size="3rem" />
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
           <ListParagraph>
             Basic experience with <br />
             Node, Express, MongoDB, Rest API, GraphQL
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <GrGraphQl size="3rem" />
         <ListContainer>
           <ListTitle>API Architecture</ListTitle>
           <ListParagraph>
             Experience with <br />
             Rest API, GraphQL
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <FaSketch size="3rem" />
         <ListContainer>
           <ListTitle>UI/UX</ListTitle>
           <ListParagraph>
             Basic experience with <br />
             Sketch, Figma
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>
   </Section>
  )
}

export default Technologies