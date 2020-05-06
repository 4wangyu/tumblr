import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as PostsThunks, Creators as PostsCreators } from 'store/posts/actions';
import { selectPostsByCollection } from 'store/selectors';
import { PostCollectionContainer, CollectionList, CollectionItem, EmptyCollectionMsg } from './PostCollection.styled';
import Post from '../../Post';
import ScrollBtn from 'components/atoms/ScrollBtn';
import Loader from 'components/atoms/Loader';
import compareCreatedAt from 'util/compare_created_at';
import usePagination from 'hooks/usePagination';
import useIntersect, { buildThresholdArray } from 'hooks/useIntersect';
import { postTransitions, postVariants } from './motions';
import { AnimatePresence, motion } from 'framer-motion';
import MasonryLayout from 'components/molecules/MasonryLayout';
import { useBreakpoint } from 'contexts/BreakpointContext';

const PostCollection = ({
  collection,
  layout = 'row',
  infiniteScroll = false,
  filter = posts => posts,
  filters = {}
}) => {

  // Redux
  const dispatch = useDispatch();
  const fetchCollection = filters => dispatch(PostsThunks.fetchPostsCollection(collection, filters));
  const wipeCollection = () => dispatch(PostsCreators.wipePostsCollection(collection));
  let posts = useSelector(state => selectPostsByCollection(state, { collection }));

  // Sort and Filter
  const finalPosts = useMemo(() => {
    if (!(posts instanceof Array)) return [];
    let filteredPosts = filter(posts);
    return filteredPosts.sort(compareCreatedAt)
  }, [posts]);


  // Pagination
  const { offset, limit, setCount, hasNext } = usePagination({ increment: 2 });

  useEffect(() => {
    wipeCollection();
    loadCollection();

    return () => window.scrollTo(0, 0);
  }, []);

  // Loading State
  const [isLoading, setLoading] = useState(false);

  // Intersection Observer
  const [$lastPost, entry] = useIntersect({
    threshold: buildThresholdArray()
  });

  // Infinite Scroll
  const loadCollection = () => {
    if (isLoading) return;
    setLoading(true);
    fetchCollection({ offset, limit, ...filters })
      .then(({ postCount }) => {
        setCount(postCount);
        setLoading(false)
      });
  };

  useEffect(() => {
    if (infiniteScroll && entry.isIntersecting && hasNext && !isLoading) {
      loadCollection();
    }
  }, [infiniteScroll, entry.isIntersecting, isLoading])



  const breakpoints = useBreakpoint();
  const columnCount = useMemo(() => {
    if (layout === 'grid') {
      if (breakpoints.md) {
        return 1
      } else if (breakpoints.lg) {
        return 3
      } else {
        return 4
      }
    } else {
      return 1
    }
  }, [breakpoints]);

  const postSize = useMemo(() => (layout === "grid" && columnCount !== 1) ? "small" : "large", [columnCount, layout]);

  const renderPosts = useCallback(() => finalPosts.map((post, idx, { length }) => (
    <CollectionItem
      key={post.id}
      as={motion.div}
      variants={postVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={postTransitions}
    >
      <div ref={idx !== length - 1 ? null : $lastPost}>
        <Post
          post={post}
          size={postSize}
        />
      </div>
    </CollectionItem>
  )), [finalPosts]);

  return (
    <PostCollectionContainer>
      <AnimatePresence>
        <MasonryLayout
          as={CollectionList}
          columns={columnCount}
        >
          {renderPosts()}
        </MasonryLayout>
      </AnimatePresence>
      {!isLoading && finalPosts.length === 0 && <EmptyCollectionMsg>That's about it</EmptyCollectionMsg>}
      <Loader isLoading={isLoading} />
      <ScrollBtn />
    </PostCollectionContainer >
  );
};

export default PostCollection;