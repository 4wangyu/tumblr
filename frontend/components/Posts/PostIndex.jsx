import React, { useEffect } from 'react';
import AudioPost from './AudioPost';
import VideoPost from './VideoPost';
import ImageGalleryPost from './ImageGalleryPost';
import CreatePostFormContainer from './CreatePostFormContainer'
const PostIndex = ({ fetchPosts, posts }) => {

  useEffect(() => {
    fetchPosts()
  }, [])


  if (posts.length === 0) {
    return <h2>Loading</h2>
  }

  return (
    <div>
      <h2>Create Post</h2>
      <CreatePostFormContainer />
      <div>
        {posts.map(post => {
          switch (post.post_type) {
            case "Audio":
              return <AudioPost post={post} />
            case "Video":
              return <VideoPost post={post} />
            case "ImageGallery":
              return <ImageGalleryPost post={post} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}

export default PostIndex;