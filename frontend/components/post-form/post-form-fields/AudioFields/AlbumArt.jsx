import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import {
  AlbumArtPreview, PreviewImg, PreviewOverlay,
  AlbumArtEditor, EditorBox
} from './AudioFields.styled';
import { HiddenFileInput } from '../PostFormFields.styled';
import { FormContext } from '../../PostForm';

const AlbumArt = () => {
  const { formFields, setFormFields } = useContext(FormContext);
  const { id: postId, albumArtAttachment } = formFields;

  const [albumArtPreview, setAlbumArtPreview] = useState(null);
  const dispatch = useDispatch();

  const purgeAttachment = attachmentId => dispatch(Posts.purgePostAttachment(postId, attachmentId));

  useEffect(() => {
    setFormFields(prev => ({
      albumArt: undefined,
      ...prev,
    }));

    if (albumArtAttachment) setAlbumArtPreview(albumArtAttachment.url);
  }, []);


  const handleAlbumArtInput = e => {
    const [albumArt] = e.target.files;
    setAlbumArtPreview(URL.createObjectURL(albumArt))
    setFormFields(prev => ({ ...prev, albumArt }));
  };

  const removeAlbumArt = e => {
    if (postId && albumArtAttachment && albumArtAttachment.url === albumArtPreview) {
      purgeAttachment(albumArtAttachment.id).then(() => setAlbumArtPreview(null));
    } else {
      setAlbumArtPreview(null)
      setFormFields(prev => ({ ...prev, albumArt: undefined }));
    };
  };

  if (albumArtPreview) return (
    <AlbumArtPreview onClick={removeAlbumArt}>
      <PreviewImg src={albumArtPreview} />
      <PreviewOverlay>Remove Image</PreviewOverlay>
    </AlbumArtPreview>
  )

  return (
    <AlbumArtEditor>
      <HiddenFileInput
        onChange={handleAlbumArtInput}
        accept=".png,.jpeg,image/*"
      />
      <EditorBox>Select album art</EditorBox>
    </AlbumArtEditor>
  );
};

export default AlbumArt;