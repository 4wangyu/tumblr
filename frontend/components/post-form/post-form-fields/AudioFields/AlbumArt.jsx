import React, { useEffect, useState } from 'react'
import {
  AlbumArtPreview, PreviewImg, PreviewOverlay,
  AlbumArtDropzone, DropzoneBox
} from './AudioFields.styled';
import { HiddenFileInput } from '../PostFormFields.styled';

const AlbumArt = ({ formData: { albumArtAttachment }, setFormData }) => {

  const [albumArtPreview, setAlbumArtPreview] = useState(null);

  useEffect(() => {
    setFormData(prev => ({
      albumArt: undefined,
      ...prev,
    }));

    if (albumArtAttachment) setAlbumArtPreview(albumArtAttachment.url);
  }, []);


  const handleAlbumArtInput = e => {
    const [albumArt] = e.target.files;
    setAlbumArtPreview(URL.createObjectURL(albumArt))
    setFormData(prev => ({ ...prev, albumArt }));
  };

  const removeAlbumArt = e => {
    setAlbumArtPreview(null)
    setFormData(prev => ({ ...prev, albumArt: undefined }));
  };

  if (albumArtPreview) return (
    <AlbumArtPreview onClick={removeAlbumArt}>
      <PreviewImg src={albumArtPreview} />
      <PreviewOverlay>Remove Image</PreviewOverlay>
    </AlbumArtPreview>
  )

  return (
    <AlbumArtDropzone>
      <HiddenFileInput
        onChange={handleAlbumArtInput}
        accept=".png,.jpeg,image/*"
      />
      <DropzoneBox>Select album art</DropzoneBox>
    </AlbumArtDropzone>
  );
};

export default AlbumArt;