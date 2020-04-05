import styled from 'styled-components';
import α from 'color-alpha';
import { ToTopIcon } from 'styled/base/Icon.styled';
import { blurIn } from 'styled/keyframes';

export const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 4rem;
`;

export const FeedCol = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedColRow = styled.div`
  display: flex;
  margin: 2rem;
`;

export const ScrollToTopIcon = styled(ToTopIcon)`
  cursor: pointer;
  color: ${α('#fff', .85)};
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  animation: .2s ${blurIn} ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px;
`;
