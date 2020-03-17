import React, { useMemo } from 'react';
import { Quote, Source } from './QuoteContent.styled';
import { CardContent } from 'styled/base/Card.styled';

const QuoteContent = ({ post: { quote, source } }) => {

  return (
    <CardContent as='figcaption'>
      <Quote>{quote}</Quote>
      {source && <Source> - {source}</Source>}
    </CardContent>
  )
};

export default QuoteContent;