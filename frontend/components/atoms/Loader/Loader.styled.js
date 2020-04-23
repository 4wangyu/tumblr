import styled, { css } from "styled-components";
import α from "color-alpha";

export const LoaderBar = styled.span`
  align-items: center;
  background-color: #ddd;
  border-radius: 3px;
  color: ${α("#fff", 0.8)};
  display: flex;
  height: 2rem;
  margin: 0 0.3rem;
  width: 2rem;
`;

export const LoaderBarIndex = styled.div`
  align-items: center;
  display: flex;
  height: 3rem;
  justify-content: center;
  margin: 0 auto;
  width: 10rem;
`;

export const LoaderContainer = styled.div`
  margin: 2rem;

  ${P => P.size === 'small' && css`
    margin: 0;

    ${LoaderBar} {
      border-radius: 2px;
      height: 1rem;
      margin: 0 0.2rem;
      width: 1rem;
    }

    ${LoaderBarIndex} {
      height: 2rem;
      width: 5rem;
    }
  `}
`;
