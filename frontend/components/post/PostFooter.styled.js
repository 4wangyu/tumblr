import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';
import { postContentPadding } from './Post.styled';
import { IconBox } from 'styled/base/Icon.styled';

export const CardFooter = styled.div`
  ${postContentPadding}
  color: ${theme('colors', 'textLight')};
  & > * { 
    cursor: pointer; 
  }
`;

export const Notes = styled.div``;

export const Controls = styled.div`
   display: flex;
`;

export const PadBox = styled(IconBox)`
  margin-left: 1.5rem;
`;