import styled from "styled-components";
import α from "color-alpha";

export const LoaderContainer = styled.div`
  margin: 2rem;
`;

export const LoaderBarIndex = styled.div`
  align-items: center;
  display: flex;
  height: 3rem;
  justify-content: center;
  margin: 0 auto;
  width: 10rem;
`;

export const LoaderBar = styled.span`
  background-color: #ddd;
  border-radius: 3px;
  color: ${α("#fff", 0.8)};
  height: 2rem;
  margin: 0 0.3rem;
  width: 2rem;
`;
