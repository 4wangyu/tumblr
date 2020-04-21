import React, { useContext } from 'react'
import { TagList, TagLink } from "./PostTags.styled";
import { PostContext } from "../Post";

const PostTags = () => {
  const { post: { tags } } = useContext(PostContext);

  if (!tags.length) return null;

  return (
    <TagList>
      {tags.map(tag => <TagLink key={tag} to={`/search/${tag}`}>#{tag}</TagLink>)}
    </TagList>
  )
}

export default PostTags;