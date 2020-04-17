import styled, { css } from 'styled-components';
import α from 'color-alpha';

export const CollectionItem = styled.li`
  break-inside: avoid-column;
  margin-bottom: 2rem;
`;

const gridLayout = css`
  /* margin: 0 auto; */
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, max-content));
  grid-auto-rows: 400px;
  justify-content: center;
`;

export const CollectionList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  &.grid-layout {
    margin: 0 auto;
    padding-left: 9rem;
    padding-right: 3rem;
    ${CollectionItem} {
      margin-right: 2rem;
    }
  }
`;

export const PostCollectionContainer = styled.div`

`;

export const EmptyCollectionMsg = styled.p`
  color: ${α('#fff', .8)};
  font-size: 2.6rem;
  margin: 2rem;
  margin-top: 14rem;
`;