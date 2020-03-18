import React, { useContext, useEffect, useMemo } from 'react';
import { Chat, TitleInput, DialogueTextarea } from './ChatFields.styled'
import { FormContext } from 'components/post-form/PostForm';

const ChatFields = () => {

  const { title, dialogue, setFormFields, handleTextInput } = useContext(FormContext);

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'Chat',
      title: '',
      dialogue: '',
      ...prev,
    }));
  }, []);

  return (
    <Chat>
      <TitleInput
        name='title'
        onChange={handleTextInput}
        placeholder='Title'
        value={title}
      />
      <DialogueTextarea
        name='dialogue'
        onChange={handleTextInput}
        placeholder='Your text here'
        value={dialogue}
      />
      <p dangerouslySetInnerHTML={{ __html: dialogue }} />
    </Chat>
  );
};

export default ChatFields;