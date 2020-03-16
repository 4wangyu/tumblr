import React, { useContext } from 'react'
import {
  Editor, EditorInput
} from 'components/post-form/post-form-fields/PostFormFields.styled';

const LinkEditor = ({ handleUrlInput }) => {
  return (
    <Editor>
      <EditorInput
        name="url"
        onChange={handleUrlInput}
        placeholder="Type or paste URL"
      />
    </Editor >
  )
};

export default LinkEditor;

