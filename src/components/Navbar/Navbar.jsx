import { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Container, Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';

const Navbar = () =>  {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu  = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  if (typeof window !== "undefined") {
    window.addEventListener('resize', showButton);
  }

  return (
  <Container>
     <Nav>
      <NavbarContainer>
        <NavLogo>
        <NavIcon style={{float: 'left'}} />
         snowleopardAlexa
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
         <NavMenu onClick={handleClick} click={click} style={{float: 'right'}}>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" href="#projects" onClick={closeMobileMenu}>Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" href="#tech" onClick={closeMobileMenu}>Technologies</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" href="#about" onClick={closeMobileMenu}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" href="#achievements" onClick={closeMobileMenu}>Achievements</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" href="#contact" onClick={closeMobileMenu}>Contact</NavLinks>
              </NavItem>
            </NavMenu>
      </NavbarContainer>
        </Nav>
    </Container>
 );
}

export default Navbar;