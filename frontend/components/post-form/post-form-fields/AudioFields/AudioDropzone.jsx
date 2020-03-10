import React, { memo } from 'react'
import {
  Dropzone, DropzoneCell, DropzoneCellTitle, AudioIcon,
  HiddenFileInput,
} from '../PostFormFields.styled';

const AudioDropzone = memo(({ handleAudioInput }) => (
  <Dropzone>
    <DropzoneCell minimize={true} style={{ height: '8rem' }}>
      <HiddenFileInput
        onChange={handleAudioInput}
        multiple
        accept=".mp3,audio/*"
      />
      <AudioIcon />
      <DropzoneCellTitle>Upload a song or sound</DropzoneCellTitle>
    </DropzoneCell>
  </Dropzone>
));

export default AudioDropzone;

