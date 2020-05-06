import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import styledMap from 'styled-map';
import { Card } from 'styled/base/Card.styled';

import { PostFooterContainer } from './PostFooter/PostFooter.styled';
import { PostHeaderContainer } from './PostHeader/PostHeader.styled';

export const PostBodyText = styled.p``;

export const PostContainer = styled(Card).attrs({
  as: 'article', 'aria-label': 'Post'
})`
  line-height: 1.5;
  position: relative;
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
`;

export const PostMain = styled.div`
  font-weight: ${theme('fontWeights.text')};
`;