import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: -20px;
    margin-top: -50px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80%;
  }
`;