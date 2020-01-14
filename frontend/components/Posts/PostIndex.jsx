import React, { useEffect } from 'react';
import AudioPost from './AudioPost';
import VideoPost from './VideoPost';
import ImageGalleryPost from './ImageGalleryPost';
import CreatePostFormContainer from './CreatePostFormContainer'
import styled from 'styled-components';
import { fetchUsers } from '../../actions/users_actions';
import { Post } from './ImageGalleryPost.styled';

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostWrapper = styled.div`
  display: flex;
  margin: 2rem;
`;


const UserAvatar = styled.img.attrs(P => ({
  src: P.src || 'https://assets.tumblr.com/images/default_avatar/cone_open_128.png'
}))`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 3px;
  position: sticky;
  position: -webkit-sticky;
  position: sticky;
  top: 1.5rem;
`;


const PostIndex = ({ fetchUsers, fetchPosts, users, posts }) => {

  useEffect(() => {
    fetchUsers()
    fetchPosts()
  }, [])


  if (posts.length === 0) {
    return <h2>Loading</h2>
  }

  const createPostComponent = ({ username }, post) => {
    switch (post.postType) {
      case "Audio":
        return <AudioPost username={username} post={post} />
      case "Video":
        return <VideoPost username={username} post={post} />
      case "ImageGallery":
        return <ImageGalleryPost username={username} post={post} />
      default:
        return null
    }
  }

  return (
    <div>
      <h2>Create Post</h2>
      <CreatePostFormContainer />
      <PostsWrapper>
        {posts.map(post => {
          const user = users[post.userId];

          return (
            <PostWrapper key={`post-${post.id}`}>
              <UserAvatar src={user.avatarUrl} />
              {createPostComponent(user, post)}
            </PostWrapper>
          )
        })}
      </PostsWrapper>
    </div>
  )
}

export default PostIndex;