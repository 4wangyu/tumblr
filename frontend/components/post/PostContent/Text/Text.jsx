import React from 'react';
import { Wrapper, TitleField, TextField } from './Text.styled';

const Text = ({ post: { title, text } }) => (
  <Wrapper>
    {title && <TitleField>{title}</TitleField>}
    <TextField>{text}</TextField>
  </Wrapper>
);

export default Text;