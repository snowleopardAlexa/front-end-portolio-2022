import { BsPenFill } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { MdDesignServices } from 'react-icons/md';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => {
  return (
   <Section id="tech">
     <SectionDivider />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
       I have worked with a range .....
     </SectionText>
     <List>
       <ListItem>
         <DiReact size="3rem" />
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
           <ListParagraph>
             Experience with <br />
             React.js, Next.js, HTML, CSS, JavaScript
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <MdDesignServices size="3rem" />
         <ListContainer>
           <ListTitle>UI/UX</ListTitle>
           <ListParagraph>
             Experience with <br />
             Sketch, Figma
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <BsPenFill size="3rem" />
         <ListContainer>
           <ListTitle>Technical Writing</ListTitle>
           <ListParagraph>
             An avid writer <br />
             Technical Documentation
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <BsPenFill size="3rem" />
         <ListContainer>
           <ListTitle>General Knowledge</ListTitle>
           <ListParagraph>
             Experience with <br />
             Node, Express, MongoDB, Rest API, GraphQL
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>
   </Section>
  )
}

export default Technologies