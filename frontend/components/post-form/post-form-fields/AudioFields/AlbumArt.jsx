import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import {
  AlbumArtPreview, PreviewImg, PreviewOverlay,
  AlbumArtDropzone, DropzoneBox
} from './AudioFields.styled';
import { HiddenFileInput } from '../PostFormFields.styled';

const AlbumArt = ({ formData, setFormData }) => {
  const { id: postId, albumArtAttachment } = formData;

  const [albumArtPreview, setAlbumArtPreview] = useState(null);
  const dispatch = useDispatch();

  const purgeAttachment = attachmentId => dispatch(Posts.purgePostAttachment(postId, attachmentId));

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
    if (postId && albumArtAttachment && albumArtAttachment.url === albumArtPreview) {
      purgeAttachment(albumArtAttachment.id).then(() => setAlbumArtPreview(null));
    } else {
      setAlbumArtPreview(null)
      setFormData(prev => ({ ...prev, albumArt: undefined }));
    };
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