import React from 'react';
import { Wrapper, QuoteText, SourceText } from './Quote.styled';
import calcQuoteSizes from 'util/calcQuoteSizes';

const Quote = ({ post: { quote, source } }) => {

  const { fontSize, lineHeight } = calcQuoteSizes(quote);

  return (
    <Wrapper>
      <QuoteText style={{ fontSize, lineHeight: lineHeight + 'px' }}>{quote}</QuoteText>
      {source && <SourceText>&nbsp;{source}</SourceText>}
    </Wrapper>
  )
};

export default Quote;