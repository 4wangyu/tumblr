import React, { memo } from 'react'
import {
  Editor, EditorCell, EditorCellTitle, AudioIcon,
  HiddenFileInput,
} from '../PostFormFields.styled';

const AudioEditor = memo(({ handleAudioInput }) => (
  <Editor>
    <EditorCell minimize={true} style={{ height: '8rem' }}>
      <HiddenFileInput
        onChange={handleAudioInput}
        accept=".mp3,audio/*"
      />
      <AudioIcon />
      <EditorCellTitle>Upload a song or sound</EditorCellTitle>
    </EditorCell>
  </Editor>
));

export default AudioEditor;

