import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiLion } from 'react-icons/gi';

import { Container, HeaderWrapper, ProjectsContainer, SocialIconsContainer, NavLink, Span, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <HeaderWrapper>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white',  marginBottom: "15px" }}>
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
    </ProjectsContainer>
      <SocialIconsContainer>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </Container>
);

export default Header;