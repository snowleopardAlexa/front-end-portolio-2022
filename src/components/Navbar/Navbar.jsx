//import { useState, useEffect } from 'react';
import Link from 'next/link';
//import { FaTimes, FaBars } from 'react-icons/fa';
import { Container, Nav, NavbarContainer, NavLogo, NavIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';

const Navbar = () =>  {


  return (
  <Container>
     <Nav>
      <NavbarContainer>
      <NavLogo>
        <NavIcon style={{float: 'left'}} />
         snowleopardAlexa
        </NavLogo>
         <NavMenu style={{float: 'right'}}>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" href="#projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" href="#tech">Technologies</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" href="#about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" href="#achievements">Achievements</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" href="#contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
      </NavbarContainer>
        </Nav>
    </Container>
 );
}

export default Navbar;