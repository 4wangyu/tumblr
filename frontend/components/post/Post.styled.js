import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import styledMap from 'styled-map';
import { Card } from 'styled/base/Card.styled';
import { PostHeaderContainer, UserAvatar } from "./PostHeader/PostHeader.styled"
import { PostFooterContainer } from "./PostFooter/PostFooter.styled"

export const PostBodyText = styled.p`

`;

export const PostContainer = styled(Card).attrs({
  as: 'article', 'aria-label': 'Post'
})`
  line-height: 1.5;
  width: ${styledMap('size', {
    small: '30rem',
    default: '54rem',
  })};


  ${PostHeaderContainer}, ${PostFooterContainer}, ${PostBodyText} {
    padding: ${styledMap('size', {
      small: '1rem',
      default: '1.5rem 2rem',
    })};
  }

  ${UserAvatar} {
    display: ${styledMap('size', {
      small: 'inline-block',
      default: 'none;',
    })};
  }
`;

export const PostMain = styled.div`
  font-weight: ${theme('fontWeights.text')};
`;