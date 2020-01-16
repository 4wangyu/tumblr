import styled from 'styled-components';
import α from 'color-alpha';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------------------------ Footer

export const ShareBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: ${({ theme: T }) => T.colors.fadedBlack};
`;

// ---------------------- Notes

export const Notes = styled.div`

`;

export const NoteCount = styled.span`

`;


// ---------------------- Controls

export const Controls = styled.div`
   display: flex;
`;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 1.4rem; */
`;

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${({ theme: T }) => T.colors.fadedBlack};
`;

