import React from 'react';
import {
  Editor, EditorInput
} from '../PostFormFields.styled';

const LinkEditor = ({ handleUrlInput }) => (
    <Editor>
      <EditorInput
        name="url"
        onChange={handleUrlInput}
        placeholder="Type or paste URL"
      />
    </Editor >
  );

export default LinkEditor;

