import React, { useEffect } from 'react';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';
import ImageGallery from '../ImageGallery/ImageGallery';
import MasterFormContainer from '../MasterForm/MasterFormContainer';
import { PostsWrapper, PostWrapper, UserAvatar } from './PostIndex.styled';



const PostIndex = ({ currentUser, fetchUsers, fetchPosts, users, posts }) => {

  useEffect(() => {
    fetchUsers()
    fetchPosts()
  }, [])


  if (posts.length === 0) {
    return <h2>Loading</h2>
  }

  const renderAppropriatePost = ({ username }, post) => {
    switch (post.postType) {
      case "Audio":
        return <Audio username={username} post={post} />
      case "Video":
        return <Video username={username} post={post} />
      case "ImageGallery":
        return <ImageGallery username={username} post={post} />
      default:
        return null
    }
  }
  // <CreatePostFormContainer />
  return (
    <div>
      <PostsWrapper>
        <PostWrapper masterForm>
          <UserAvatar src={currentUser.avatarUrl} />
          <MasterFormContainer />
        </PostWrapper>
        {posts.map(post => {
          const user = users[post.userId];

          return (
            <PostWrapper key={`post-${post.id}`}>
              <UserAvatar src={user.avatarUrl} />
              {renderAppropriatePost(user, post)}
            </PostWrapper>
          )
        })}
      </PostsWrapper>
    </div>
  )
}

export default PostIndex;