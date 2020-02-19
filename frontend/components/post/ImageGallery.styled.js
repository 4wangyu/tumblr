import styled, { css } from 'styled-components';
import { font } from 'styled/theme';

export const standardPadding = css`padding: 1.5rem 2rem;`;

export const Gallery = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

export const Caption = styled.p`
  ${standardPadding}
  font-weight: ${font.weight.regular};
`;