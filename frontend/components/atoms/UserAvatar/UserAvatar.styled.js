import styled from 'styled-components';
import styledMap from 'styled-map';

export const UserAvatarContainer = styled.div`
  border-radius: 3px;
  height: ${styledMap('size', {
    large: '6.4rem',
    default: '4rem',
    small: '3.7rem'
  })};
  overflow: hidden;
  width: ${styledMap('size', {
    large: '6.4rem',
    default: '4rem',
    small: '3.7rem'
  })};
`;
