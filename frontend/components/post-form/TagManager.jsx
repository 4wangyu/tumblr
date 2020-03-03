import React, { useState, useEffect } from 'react';
import { TagIndex, Tag, TagForm, TagInput } from './PostForm.styled';
const TagManager = ({ formData, setFormData }) => {

  const [selectedTag, setSelectedTag] = useState(-1);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    setFormData(prev => ({ ...prev, allTags: [] }))
  }, [])

  const handleTagInput = e => {
    const { value } = e.target;
    setTagInput(value);
  }

  const handleAddTag = e => {
    e.preventDefault();
    const newTag = tagInput.toLowerCase().replace(/#/, '').trim();
    if (newTag.length && !formData.allTags.includes(newTag)) {
      setFormData(prev => ({ ...prev, allTags: [...prev.allTags, newTag] }));
    }
    setTagInput('');
    if (formData.allTags.length > 20) {
      setFormData(prev => ({ ...prev, allTags: prev.allTags.filter((tag, idx) => idx !== 0) }));
    }
  }

  const handleSelectTag = e => {
    const idx = parseInt(e.target.dataset.tag);
    setSelectedTag(selectedTag === idx ? -1 : idx);
  }

  const handleRemoveTag = e => {
    if (!tagInput.length && formData.allTags.length && e.keyCode === 8) {
      const removeTagIdx = selectedTag > -1 ? selectedTag : formData.allTags.length - 1;
      setFormData(prev => ({ ...prev, allTags: prev.allTags.filter((tag, idx) => idx !== removeTagIdx) }));
    }
  }

  const { allTags } = formData;
  return (
    <TagIndex>
      {allTags && allTags.map((tag, idx) => (
        <Tag
          key={idx}
          data-tag={idx}
          className={idx === selectedTag ? 'selected' : ''}
          tag-selected={idx === selectedTag}
          onClick={handleSelectTag}
          onKeyDown={handleRemoveTag}
        >
          #{tag}
        </Tag>
      ))}
      <TagForm onSubmit={handleAddTag}>
        <TagInput
          showPlaceholder={allTags && !allTags.length}
          value={tagInput}
          onChange={handleTagInput}
          onKeyDown={handleRemoveTag}
        />
      </TagForm>
    </TagIndex>
  );
};

export default TagManager;