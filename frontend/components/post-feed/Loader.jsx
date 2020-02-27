import React from 'react';
import { flexCenter } from 'styled/helpers';
import styled from 'styled-components';
import { pulse } from 'styled/keyframes';

const KnightRiderLoader = styled.div`
  ${flexCenter};
  height: 2rem;
  margin: 1rem 0;
  margin-left: 8.4rem;
`;

const KnightRiderBar = styled.div`
  background-color: white;
  height: 2rem;
  width: 2rem;
  margin: 0 0.45rem;
  border-radius: 5px;
  animation: 0.55s ${pulse} infinite;
  animation-delay: ${props => props.barId * 0.2}s;
`;

const Loader = () => (
  <KnightRiderLoader>
    <KnightRiderBar barId={3} />
    <KnightRiderBar barId={2} />
    <KnightRiderBar barId={1} />
  </KnightRiderLoader>
);

export default Loader;