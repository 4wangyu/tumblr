import styled, { css } from 'styled-components';
import α from 'color-alpha';

const gridLayout = css`
  column-count: 4;
  column-gap: 2rem; 
  column-fill: balance;

  @media only screen and (max-width: calc(32rem * 2.5)) {
    column-count: 3;
  }

  @media only screen and (max-width: calc(32rem * 2)) {
    column-count: 2;
  }
`;

const columnLayout = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CollectionItem = styled.li`
  break-inside: avoid-column;
  margin-bottom: 2rem;
`;

export const CollectionList = styled.ul`
  display: inline-block;
  list-style-type: none;
`;

export const PostCollectionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${CollectionList} {
    ${props => props.layout === 'grid' ? gridLayout : columnLayout};
  }
`;

export const EmptyCollectionMsg = styled.p`
  color: ${α('#fff', .8)};
  font-size: 2.6rem;
  margin: 2rem;
  margin-top: 14rem;
`