import React, { useContext, useEffect, useMemo } from 'react';
import { Text, TitleInput, TextTextareaAutosize } from './TextFields.styled'
import { FormContext } from 'components/post-form/PostForm';

const TextFields = () => {

  const { title, text, setFormFields, handleTextInput } = useContext(FormContext);

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'Text',
      title: '',
      text: '',
      ...prev,
    }));
  }, []);

  return (
    <Text>
      <TitleInput
        name='title'
        onChange={handleTextInput}
        placeholder='Title'
        value={title}
      />
      <TextTextareaAutosize
        lineHeight='20'
        name='text'
        placeholder='Your text here'
      />
    </Text>
  );
};

export default TextFields;