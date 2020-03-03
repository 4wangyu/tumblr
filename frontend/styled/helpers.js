import { css } from 'styled-components';
import styledMap from 'styled-map';
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexCenterCol = css`
  ${flexCenter}
  flex-direction: column;
`;

export const absoluteCover = css`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;