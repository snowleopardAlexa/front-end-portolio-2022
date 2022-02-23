import Link from 'next/link';
import { GiLion } from 'react-icons/gi';
import { Container, HeaderWrapper, ProjectsContainer, NavLink, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <HeaderWrapper>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white',  marginBottom: "15px", marginLeft: "10px" }}>
          <GiLion size="3rem" /> 
          <Span>snowleopardAlexa</Span>
        </a>
      </Link>
    </HeaderWrapper>
    <ProjectsContainer>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#achievements">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>        
    </ProjectsContainer>
    </Container>
);

export default Header;