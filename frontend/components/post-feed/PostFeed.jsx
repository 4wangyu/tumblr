import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { selectCurrentUser, selectAllUsers, selectAllPosts } from 'store/selectors';
import ComposePost from './ComposePost';
import KnightLoader from './Loader';
import { FeedCol, FeedColRow, PostBlogImgCube } from './PostFeed.styled';

import Post from 'components/post/Post';
import compareCreatedAt from 'util/compare_created_at'
import usePagination from 'hooks/usePagination';

const PostFeed = () => {

  const dispatch = useDispatch();
  const fetchUsers = () => dispatch(Users.fetchUsers());
  const fetchPosts = filters => dispatch(Posts.fetchPosts(filters));

  const [currentUser, users, posts] = useSelector(state => [
    selectCurrentUser(state), selectAllUsers(state), selectAllPosts(state)
  ]);

  const [offset, limit, setCount, end] = usePagination(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers()
    loadPosts()
  }, []);

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
    fetchPosts({ offset, limit })
      .then(({ count }) => {
        setCount(count);
        setLoading(false)
      });
  };

  return (
    <>
      <FeedCol>
        <ComposePost avatarUrl={currentUser.avatarUrl} />
        {posts
          .sort(compareCreatedAt)
          .map((post, idx) => {
            const author = users[post.userId];
            return (
              <FeedColRow key={post.id} ref={idx === posts.length - 1 ? lastPost : null}>
                <PostBlogImgCube avatarUrl={author.avatarUrl} />
                <Post post={post} />
              </FeedColRow>
            )
          })}
        {loading && <KnightLoader />}
      </FeedCol>
      <FeedCol></FeedCol>
    </>
  );
}

export default PostFeed;