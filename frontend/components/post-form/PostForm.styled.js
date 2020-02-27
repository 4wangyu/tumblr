import styled from 'styled-components';
import { cardPadding } from 'styled/base/Card.styled';

// -------------------- Header
export const CardHeader = styled.div`
  ${cardPadding};
`;

// -------------------- Footer
export const CardFooter = styled.div`
  ${cardPadding};
  display: flex;
  justify-content: space-between;
`;

