import React from 'react';
import { Text, TextTitle, TextWrapper } from './TextContent.styled';

const TextContent = ({ post: { title, text } }) => (
  <Text>
    {title && <TextTitle>{title}</TextTitle>}
    <TextWrapper>{text}</TextWrapper>
  </Text>
);

export default TextContent;