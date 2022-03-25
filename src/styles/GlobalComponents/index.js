import styled from 'styled-components';

export const Section = styled.section`
  padding: 0px;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
    padding: 22px 48px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 50px;
    margin-left: 30px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 50px;
    margin-left: 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 600;
  font-size: 5.5rem;
  line-height: 5rem;
  margin-top: 25px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 20px;
    margin-top: 25px;
  }

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 30px;
    margin-top: 50px;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-family: 'Readex Pro', sans-serif;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #ff00cc 0%, #333399 100%)' :
    'linear-gradient(270deg, #ff00cc 0%, #333399 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }  

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
`;

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

@media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;






