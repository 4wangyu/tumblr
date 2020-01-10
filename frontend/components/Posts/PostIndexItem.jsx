import React from 'react'

const PostIndexItem = ({ post: { title, description, postType, assetUrl } }) => (
  <li>
    <strong>{title}</strong>
    <p>{description}</p>
    {assetUrl && <img src={assetUrl} alt={title} width="250px" />}
  </li>
)

export default PostIndexItem