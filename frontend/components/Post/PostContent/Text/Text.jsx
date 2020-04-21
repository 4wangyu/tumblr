import React, { useContext } from 'react';
import { PostContext } from '../../Post';
import { TextContainer, TitleField, TextField } from './Text.styled';

const Text = () => {
  const { title, text } = useContext(PostContext);

  return (
    <TextContainer>
      {title && <TitleField>{title}</TitleField>}
      <TextField>{text}</TextField>
    </TextContainer>
  )
};

export default Text;