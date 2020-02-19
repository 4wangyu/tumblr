import React from "react";
import styled, { keyframes } from "styled-components";

const Pulse = keyframes`
  0% {
    transform: scaleY(1.2);
    opacity: 0.8;
  }
  50% {
    transform: scaleY(1);
    opacity: 0.6;
  }
  100% {
    transform: scaleY(1.2);
    opacity: 0.8;
  }
`;

const KnightRiderLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  animation: 0.55s ${Pulse} infinite;
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