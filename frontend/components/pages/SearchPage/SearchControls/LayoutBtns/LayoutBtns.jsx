import React from 'react';
import { LayoutBtnsContainer, LayoutBtn, GridIcon, ListIcon } from './LayoutBtns.styled';

const LayoutBtns = () => (
  <LayoutBtnsContainer>
    <LayoutBtn aria-label='View in grid' active={true}>
      <GridIcon />
    </LayoutBtn>
    <LayoutBtn aria-label='View in list'>
      <ListIcon />
    </LayoutBtn>
  </LayoutBtnsContainer>
);

export default LayoutBtns;
