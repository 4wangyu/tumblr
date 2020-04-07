import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { selectCurrentUser, selectPostsByCollection } from 'store/selectors';
import ComposePost from './ComposePost/index';
import KnightLoader from './Loader';
import { FeedContainer, FeedCol, FeedColRow } from './PostFeed.styled';
import ScrollToTopBtn from './ScrollToTopBtn';

import Post from 'components/Post';
import compareCreatedAt from 'util/compare_created_at'
import usePagination from 'hooks/usePagination';
// import Sidebar from 'components/sidebar/Sidebar';

const PostFeed = () => {
  const dispatch = useDispatch();
  const fetchDashboard = filters => dispatch(Posts.fetchPostsCollection('dashboard', filters));

  const [currentUser, posts] = useSelector(state => [
    selectCurrentUser(state),
    selectPostsByCollection(state, { collection: 'dashboard' }),
  ]);

  const [offset, limit, setCount, end] = usePagination(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
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
    fetchDashboard({ offset, limit })
      .then(({ postCount }) => {
        setCount(postCount);
        setLoading(false)
      });
  };

  const feedColumns = posts
    .sort(compareCreatedAt)
    .map((post, listItemIdx, { length: listLength }) => {
      return (
        <FeedColRow key={post.id} ref={listItemIdx === listLength - 1 ? lastPost : null} style={{ position: 'relative' }}>
          <Post post={post} />
        </FeedColRow>
      );
    });

  const knightLoader = useMemo(() => loading && KnightLoader, [loading]);

  const { avatarAttachment: { url: avatarUrl } } = currentUser;

  return (
    <FeedContainer>
      <FeedCol>
        <ComposePost avatarUrl={avatarUrl} />
        {feedColumns}
        {knightLoader}
      </FeedCol>
      <FeedCol>
      </FeedCol>

      <ScrollToTopBtn />
    </FeedContainer>
  );
}

export default PostFeed;