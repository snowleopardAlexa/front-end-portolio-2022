import Link from 'next/link';
import { GiLion } from 'react-icons/gi';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Container, Nav, NavLogo, NavbarContainer, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink, Button } from './NavbarStyles';

const Navbar = () =>  (
  <Container>
     <Nav>
      <NavbarContainer>
        <NavLogo as={Link} to='/' onClick={closeMobileMenu} >
          <NavIcon style={{float: 'left'}}>
          <GiLion size="3rem" /> snowleopardAlexa
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
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/book-apt">
                    <Button>Book Appointment</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/book-apt">
                    <Button onClick={closeMobileMenu} fontBig >
                      Book Appointment
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </Container>
);

export default Navbar;