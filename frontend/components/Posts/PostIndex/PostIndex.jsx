import React, { useEffect, useState, Fragment as F } from 'react';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';
import ImageGallery from '../ImageGallery/ImageGallery';
import TypeButtonsContainer from './TypeButtons/TypeButtonsContainer';
import { Main, Sidebar, Row, UserAvatar } from './PostIndex.styled';
import Post from '../Post/Post';

const PostIndex = ({ currentUser, fetchUsers, fetchPosts, users, posts }) => {

  const [pagination, setPagination] = useState({
    per_page: 3,
    page: 1,
    count: null,
    loading: false
  })

  useEffect(() => {
    fetchUsers()
    fetchPosts({ per_page: 8, page: 1 })
      .then(obj => {
        // debugger
      })
  }, [])

  const loadPosts = () => {
    const { per_page, page, loading } = pagination;
    if (loading) { return }
    setPagination(prev => Object.assign({}, prev, { loading: true }))

    fetchPosts({ per_page, page })
      .then(() => {
        setPagination(prev => Object.assign({}, prev, { page: prev.page++, loading: false }))
      });
  };


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
          <TypeButtonsContainer />
        </Row>
        {posts.map(post => {
          const author = users[post.userId];

          return (
            <Row key={post.id}>
              <UserAvatar src={author.avatarUrl} />
              <Post post={post} currentUser={currentUser} likePost={()=>{}}>
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