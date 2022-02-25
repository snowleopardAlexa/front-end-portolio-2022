import Link from 'next/link';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Container, Nav, NavLogo, NavbarContainer, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';

const Navbar = () =>  (
  <Container>
     <Nav>
      <NavbarContainer>
        <NavLogo as={Link} to='/' onClick={closeMobileMenu} >
          <NavIcon style={{float: 'left'}}>
            snowleopardAlexa
          </NavIcon>
         </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} style={{float: 'right'}}>
              <NavItem>
                <NavLinks to="/projects" href="#projects" onClick={closeMobileMenu}>
                   Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/tech" href="#tech" onClick={closeMobileMenu}>Technologies</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" href="#about" onClick={closeMobileMenu}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/achievements" href="#achievements" onClick={closeMobileMenu}>Achievements</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" href="#contact" onClick={closeMobileMenu}>Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </Container>
);

export default Navbar;