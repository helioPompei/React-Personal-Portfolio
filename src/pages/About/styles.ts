import styled from "styled-components";

export const AboutContainer = styled.div``;

export const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 720px;
  background-color: ${(p) => p.theme.colors.white["white"]};
  padding: 3em;
  display: flex;
  background-color: blue;


  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
