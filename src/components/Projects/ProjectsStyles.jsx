import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 10px;
  }
`;

export const BlogCard = styled.div`
  border-radius: 20px;
  background: #212d45;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 15px;
`;

export const HeaderThree = styled.h3`
  font-family: "Readex Pro, sans-serif"
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0px 50px;
  color: #e4e6e7;
  font-size: 2rem;
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
    font-size: 1.2rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 2rem;
  padding: 1.2rem 2rem;
  border-radius: 25px;
  background-color: #ff00cc; /* fallback for old browsers */
  background-image: -webkit-linear-gradient(
    to left,
    #333399,
    #ff00cc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(
    to left,
    #333399,
    #ff00cc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: background-color 2s ease-out 100ms;

  &:hover {
    background: #12c2e9; /* fallback for old browsers */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
    padding: 15px;
  }
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
