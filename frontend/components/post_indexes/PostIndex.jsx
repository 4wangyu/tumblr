import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { selectCurrentUser, selectAllUsers, selectAllPosts } from 'store/selectors';
import CreatePostBtns from './CreatePostBtns';
import KnightLoader from './Loader';
import ImageGallery from 'components/post/ImageGallery';
import Video from 'components/post/Video';
import Audio from 'components/post/Audio';
import { Main, Sidebar, Row, UserAvatar } from './PostIndex.styled';
import Post from 'components/post/PostBase';
import compareCreatedAt from 'util/compare_created_at'
import usePagination from 'hooks/usePagination';

const PostIndex = () => {

  const dispatch = useDispatch();
  const fetchUsers = () => dispatch(Users.fetchUsers());
  const fetchPosts = filters => dispatch(Posts.fetchPosts(filters));
  const togglePostLike = (postId, isLiked) => dispatch(Posts.togglePostLike(postId, isLiked));

  const [currentUser, users, posts] = useSelector(state => [
    selectCurrentUser(state),
    selectAllUsers(state),
    selectAllPosts(state)
  ])

  const [offset, limit, setCount, end] = usePagination(1);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchUsers()
    loadPosts()
  }, [])

  const observer = useRef();
  const lastPost = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !end) {
        loadPosts()
      }
    });
    if (node) observer.current.observe(node)
  }, [loading, end]);




  const loadPosts = () => {
    if (loading) return;
    setLoading(true)
    setTimeout(() => {
      fetchPosts({ offset, limit })
        .then(({ count }) => {
          setCount(count);
          console.log(count, end)
          setLoading(false)
        });
    }, 5000)
  };

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
    <>
      <Main>
        <Row>
          <UserAvatar src={currentUser && currentUser.avatarUrl} />
          <CreatePostBtns />
        </Row>
        {posts
          .sort(compareCreatedAt)
          .map((post, idx) => {
            const author = users[post.userId];
            return (
              <Row key={post.id} ref={idx === posts.length - 1 ? lastPost : null}>
                <UserAvatar src={author.avatarUrl} />
                <Post
                  currentUser={currentUser}
                  post={post}
                  author={author}
                  togglePostLike={togglePostLike}
                >
                  {renderPostContent(post)}
                </Post>
              </Row>
            )
          })}
        {loading && <KnightLoader />}
      </Main>
      <Sidebar>

      </Sidebar>
    </>
  )
}

export default PostIndex;