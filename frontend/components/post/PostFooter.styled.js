import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { cardPadding } from 'styled/base/Card.styled';
import { IconBox } from 'styled/base/Icon.styled';

export const CardFooter = styled.div`
  ${cardPadding}
  color: ${theme('colors.textLight')};
  & > * { 
    cursor: pointer; 
  }
  display: flex;
  justify-content: space-between;
`;

export const Notes = styled.div``;

export const Controls = styled.div`
   display: flex;
`;

export const PadBox = styled(IconBox)`
  margin-left: 1.5rem;
`;