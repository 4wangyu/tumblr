import React, { useEffect } from 'react';
import PostIndexItem from './PostIndexItem'

const PostIndex = ({ fetchPosts, posts }) => {

  useEffect(() => {
    fetchPosts()
  }, [])


  if (posts.length === 0) {
    return <h2>Loading</h2>
  }

  return (
    <div>
      <ul>
        {posts.map(post => (
          <PostIndexItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}

export default PostIndex;