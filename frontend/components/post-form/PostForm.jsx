import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { CardHeader, CardFooter, Tags, Tag, TagForm, TagInput } from './PostForm.styled';
import Btn from 'styled/base/Btn.styled';
import ImageGallery from './post-form-fields/ImageGalleryFields';
import Video from './post-form-fields/VideoFields';

const PostForm = ({ postType }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(Modal.closeModal());
  const createPost = formData => dispatch(Posts.createPost(formData));

  const getFields = props => ({
    ImageGallery: <ImageGallery {...props} />,
    Video: <Video {...props} />,
  });

  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState(-1);
  const [tagInput, setTagInput] = useState('');

  const handleTagInput = e => {
    const { value } = e.target;
    setTagInput(value)
  }

  const handleAddTag = e => {
    e.preventDefault();
    const newTag = tagInput.toLowerCase().replace(/#/, '').trim();
    if (newTag.length && !tags.includes(newTag)) setTags(prevTags => [...prevTags, newTag])
    setTagInput('');
    if (tags.length > 20) setTags(prevTags => prevTags.filter((tag, idx) => idx !== 0))
  }

  const handleSelectTag = e => {
    const idx = parseInt(e.target.dataset.tag);
    setSelectedTag(selectedTag === idx ? -1 : idx);
  }


  const handleRemoveTag = e => {
    if (!tagInput.length && tags.length && e.keyCode === 8) {
      const removeTagIdx = selectedTag > -1 ? selectedTag : tags.length - 1;
      setTags(prevTags => prevTags.filter((tag, idx) => idx !== removeTagIdx))
    }
  }

  let preProcess;
  const setPreProcess = callback => { preProcess = callback; }
  const processFormData = () => {
    const formPost = preProcess();
    for (const tag of tags) {
      formPost.append('post[all_tags][]', tag)
    }
    createPost(formPost).then(() => closeModal())
  };
  // const handleRemoveTag = 
  return (
    <Card>
      <CardHeader>{currentUser.username}</CardHeader>
      <CardContent noPadding>
        {getFields({ setPreProcess })[postType]}
        <Tags>
          {tags.map((tag, idx) => (
            <Tag
              key={idx}
              data-tag={idx}
              className={idx === selectedTag ? 'selected' : ''}
              tag-selected={idx === selectedTag}
              onClick={handleSelectTag}
              onKeyDown={handleRemoveTag}
            >#{tag}</Tag>
          ))}
          <TagForm onSubmit={handleAddTag}>
            <TagInput
              showPlaceholder={!tags.length}
              value={tagInput}
              onChange={handleTagInput}
              onKeyDown={handleRemoveTag}
            />
          </TagForm>
        </Tags>
      </CardContent>
      <CardFooter>
        <Btn secondary onClick={closeModal}>Close</Btn>
        <Btn submit onClick={processFormData}>Post</Btn>
      </CardFooter>
    </Card>
  );
};

export default PostForm;