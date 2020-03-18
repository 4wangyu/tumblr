import React, { useMemo } from 'react';
import { Quote, QuoteText, SourceText } from './QuoteContent.styled';
import calcQuoteSizes from 'util/calcQuoteSizes';

const QuoteContent = ({ post: { quote, source } }) => {

  const { fontSize, lineHeight } = calcQuoteSizes(quote);

  return (
    <Quote>
      <QuoteText style={{ fontSize, lineHeight: lineHeight + 'px' }}>{quote}</QuoteText>
      {source && <SourceText>&nbsp;{source}</SourceText>}
    </Quote>
  )
};

export default QuoteContent;