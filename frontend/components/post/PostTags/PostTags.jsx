import React, { useContext } from 'react'
import { TagIndex, Tag } from "./PostTags.styled";
import { PostContext } from "../Post";

const PostTags = () => {
  const { post: { tags } } = useContext(PostContext);

  if (tags.length === 0) return null;

  return (
    <TagIndex>
      {tags.map((tag, idx) =>
        <Tag key={`tag-${idx}`}>#{tag}</Tag>
      )}
    </TagIndex>
  )
}

export default PostTags;