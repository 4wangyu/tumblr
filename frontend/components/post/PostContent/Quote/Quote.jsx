import React, { useContext } from 'react';
import { PostContext } from '../../Post';
import { QuoteContainer, QuoteText, SourceText } from './Quote.styled';
import calcQuoteSizes from 'util/calcQuoteSizes';

const Quote = () => {
  const { quote, source } = useContext(PostContext);
  const { fontSize, lineHeight } = calcQuoteSizes(quote);

  return (
    <QuoteContainer>
      <QuoteText style={{ fontSize, lineHeight: lineHeight + 'px' }}>{quote}</QuoteText>
      {source && <SourceText>&nbsp;{source}</SourceText>}
    </QuoteContainer>
  )
};

export default Quote;