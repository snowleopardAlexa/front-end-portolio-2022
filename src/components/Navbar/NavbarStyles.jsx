import styled from "styled-components";
import Link from "next/link";
import { GiLion } from "react-icons/gi";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    max-width: 100%;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: #333399;
`;

export const NavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.span`
  font-family: 'Baloo 2', cursive;
  display: flex;
  justify-self: flex-start;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.2rem;
  align-items: center;
  margin-left: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 1rem;
    font-size: 1.7rem;
  }
`;

export const NavIcon = styled(GiLion)`
  margin-right: 5px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(1050%, 0%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 47px;
  margin-top: 14px;


  @media ${(props) => props.theme.breakpoints.sm} {
    background: #333399;
    display: flex;
    flex-direction: column;
    height: 130vh;
    width: 111.5vw;
    position: absolute;
    padding: 0px;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-175%")};
    transition: all 0.5s ease;
  }

`;

export const NavItem = styled.li`
  margin-top: -45px;
  line-height: 59px;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 30px;

  &:hover {
    border-bottom: 3px solid #ff00cc;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
    padding: 10px;
    margin-left: 0px;
    line-height: 100px;
    width: 100%;
    font-size: 1.7rem;
    
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
    width: 100%;
    display: table;
  }
`;

