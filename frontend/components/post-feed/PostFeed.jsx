import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Feed } from 'store/feed/actions';
import { selectCurrentUser, selectAllUsers, selectAllPosts, selectAllReblogs } from 'store/selectors';
import ComposePost from './ComposePost';
import KnightLoader from './Loader';
import { FeedContainer, FeedCol, FeedColRow, PostBlogImgCube } from './PostFeed.styled';
import ScrollToTopBtn from './ScrollToTopBtn';

import Post from 'components/post/Post';
import compareCreatedAt from 'util/compare_created_at'
import usePagination from 'hooks/usePagination';
import RecommendedBlogs from 'components/sidebar-widgets/RecommendedBlogs';
const PostFeed = () => {

  const dispatch = useDispatch();
  const fetchDashboard = filters => dispatch(Feed.fetchDashboard(filters));


  const [currentUser, users, posts, reblogs] = useSelector(state => [
    selectCurrentUser(state), selectAllUsers(state), selectAllPosts(state), selectAllReblogs(state)
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
      .then(({ count }) => {
        setCount(count);
        setLoading(false)
      });
  };

  return (
    <FeedContainer>
      <FeedCol>
        <ComposePost avatarUrl={currentUser.avatarUrl} />
        {posts
          .sort(compareCreatedAt)
          .map((postOrReblog, idx, collection) => {
            const { avatarUrl } = postOrReblog.isReblog ? users[postOrReblog.rebloggerId] : users[postOrReblog.userId];
            return (
              <FeedColRow key={postOrReblog.isReblog ? `reblog-${postOrReblog.id}` : `post-${postOrReblog.id}`} ref={idx === collection.length - 1 ? lastPost : null}>
                <PostBlogImgCube avatarUrl={avatarUrl} />
                <Post post={postOrReblog} />
              </FeedColRow>
            )
          })}
        {loading && <KnightLoader />}
      </FeedCol>
      <FeedCol>
        <RecommendedBlogs />
      </FeedCol>
      <ScrollToTopBtn />
    </FeedContainer>
  );
}

export default PostFeed;