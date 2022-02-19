import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiLion } from 'react-icons/gi';
import { Container, HeaderWrapper, NavLink, ProjectsContainer, TechContainer, AboutContainer, SocialIconsContainer, SocialIcons } from './HeaderStyles';

const Header = () => {
    return (
      <Container>
          <HeaderWrapper>
              <Link href="/">
                 <a style={{ display: "flex", alignItems: "center", color: "white"}}>
                   <GiLion size="3rem" />
                   <span style={{ marginLeft: "10px" }}>snowleopardAlexa</span>
                 </a> 
              </Link>
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
              </ProjectsContainer>
              <SocialIconsContainer>
                <SocialIcons href="https://github.com">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://linkedin.com">
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://github.com">
                  <AiFillInstagram size="3rem" />
                </SocialIcons>
              </SocialIconsContainer>
          </HeaderWrapper>
      </Container>
    );
}

export default Header; 