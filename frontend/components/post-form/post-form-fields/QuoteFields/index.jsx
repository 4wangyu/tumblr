import React, { useContext, useEffect, useMemo } from 'react';
import {
  Quote,
  QuoteWrapper, QuoteTextareaAutosize,
  SourceWrapper, SourceTextarea
} from './QuoteFields.styled'
import { FormContext } from 'components/post-form/PostForm';
import calcQuoteSizes from 'util/calcQuoteSizes';

const QuoteFields = () => {

  const { quote, source, setFormFields, handleTextInput } = useContext(FormContext);

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'Quote',
      quote: '',
      source: '',
      ...prev,
    }));
  }, []);


  const { fontSize, lineHeight } = calcQuoteSizes(quote);
  return (
    <Quote>
      <QuoteWrapper style={{ fontSize, lineHeight: lineHeight + 'px' }} lightenText={!Boolean(quote)}>
        <QuoteTextareaAutosize
          lineHeight={lineHeight}
          style={{ fontSize, lineHeight: lineHeight + 'px' }}
          name='quote'
          placeholder='Quote'
        />
      </QuoteWrapper>
      <SourceWrapper lightenText={!Boolean(source)}>
        <SourceTextarea
          onChange={handleTextInput}
          name='source'
          placeholder='Source'
          value={source}
        />
      </SourceWrapper>

    </Quote >
  )

};

export default QuoteFields;