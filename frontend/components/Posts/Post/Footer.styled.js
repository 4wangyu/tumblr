import styled from 'styled-components';
import α from 'color-alpha';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { standardPadding } from './Post.styled';


// ------------------------------------------ Footer

export const ShareBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: ${({ theme: T }) => T.colors.fadedBlack};
`;

// ---------------------- Notes

export const Notes = styled.div`
  cursor: pointer;
`;

export const NoteCount = styled.span`
  font-size: 1.4rem;
  font-weight: ${({ theme: T }) => T.font.weight.medium};
`;


// ---------------------- Controls

export const Controls = styled.div`
   display: flex;
`;

export const IconBox = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  /* margin: 1.4rem; */
`;

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${({ liked, theme: T }) => liked ? T.colors.redOrange : T.colors.fadedBlack};
  ${P => P.hidden && 'display: none;'}
`;

