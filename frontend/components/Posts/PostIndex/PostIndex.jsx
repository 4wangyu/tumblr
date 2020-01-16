import React, { useEffect, Fragment as F } from 'react';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';
import ImageGallery from '../ImageGallery/ImageGallery';
import NewPostButtonsContainer from './NewPostButtons/NewPostButtonsContainer';
import { Main, Sidebar, Row, UserAvatar } from './PostIndex.styled';
import Post from '../Post/Post';
const PostIndex = ({ currentUser, fetchUsers, fetchPosts, users, posts }) => {

  useEffect(() => {
    fetchUsers()
    fetchPosts()
  }, [])


  if (posts.length === 0) {
    return <h2>Loading</h2>
  }

  const renderPostContent = post => {
    switch (post.postType) {
      case "Audio":
        return <Audio post={post} />
      case "Video":
        return <Video post={post} />
      case "ImageGallery":
        return <ImageGallery post={post} />
      default:
        return null
    }
  }

  return (
    <F>
      <Main>
        <Row>
          <UserAvatar src={currentUser.avatarUrl} />
          <NewPostButtonsContainer />
        </Row>
        {posts.map(post => {
          const author = users[post.userId];

          return (
            <Row key={post.id}>
              <UserAvatar src={author.avatarUrl} />
              <Post author={author} post={post} currentUser={currentUser}>
                {renderPostContent(post)}
              </Post>
            </Row>
          )
        })}
      </Main>
      <Sidebar>

      </Sidebar>
    </F>
  )
}

export default PostIndex;