import styled from 'styled-components';

export const PostCollectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;

export const CollectionList = styled.ul`
  column-count: 4;
  @media only screen and (max-width: calc(32rem * 2.5)) {
    column-count: 3;
  }
  @media only screen and (max-width: calc(32rem * 2)) {
    column-count: 2;
  }
  column-gap: 2rem; 
  column-fill: balance;
  display: inline-block;
  list-style-type: none;
  margin: 0 auto;
`;

export const CollectionItem = styled.li`
 break-inside: avoid-column;
 margin-bottom: 2rem;
`;
