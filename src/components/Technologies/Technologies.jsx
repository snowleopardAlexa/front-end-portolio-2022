import { FaReact, FaSketch } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { ImDatabase } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked with a range of technolgies building side projects as well
        as freelancing and building the projects for non-profit organizations. I
        am Full-Stack Developer specializing in a Front-End Development.
      </SectionText>
      <List>
        <ListItem>
          <CgWebsite size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              HTML5, CSS3, SCSS, JavaScript + ES6
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <FaReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End Frameworks</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <RiLayoutMasonryFill size="3rem" />
          <ListContainer>
            <ListTitle>UI Frameworks</ListTitle>
            <ListParagraph>
              Experience with <br />
              Bootstrap, MaterialUI, Tailwind.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ImDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Basic experience with <br />
              Node, Express, MongoDB, Firebase
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
  );
}

export default Technologies;
