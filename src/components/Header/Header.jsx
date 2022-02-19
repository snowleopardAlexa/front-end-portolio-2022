import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, HeaderWrapper, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
    return (
      <Container>
          <HeaderWrapper>
              <Link href="/">
                 <a style={{ display: "flex", alignItems: "center", color: "white"}}>
                   <DiCssdeck size="3rem" />
                   <span> Portfolio </span>
                 </a> 
              </Link>
          </HeaderWrapper>
      </Container>
    );
}

export default Header; 