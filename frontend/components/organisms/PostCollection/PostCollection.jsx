import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as PostsThunks, Creators as PostsCreators } from 'store/posts/actions';
import { selectPostsByCollection } from 'store/selectors';
import { PostCollectionContainer, CollectionList, CollectionItem, EmptyCollectionMsg } from './PostCollection.styled';
import Post from '../../Post';
import ScrollBtn from 'components/atoms/ScrollBtn';
import Loader from 'components/atoms/Loader';
import compareCreatedAt from 'util/compare_created_at';
import usePagination from 'hooks/usePagination';
import useIntersect from 'hooks/useIntersect';
import { postTransitions, postVariants } from './motions';
import { AnimatePresence, motion } from 'framer-motion';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

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
  const postSize = useMemo(() => layout === "grid" ? "small" : "large", [layout]);

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
    threshold: [0.9]
  });

  // Infinite Scroll
  const loadCollection = () => {
    if (isLoading) return;
    setLoading(true);
    console.log('FETCHING')
    fetchCollection({ offset, limit, ...filters })
      .then(({ postCount }) => {
        console.log('Post count:', postCount)
        setCount(postCount);
        setLoading(false)
      });
  };

  useEffect(() => {
    if (infiniteScroll && entry.isIntersecting && hasNext && !isLoading) {
      loadCollection();
    }
  }, [infiniteScroll, entry.isIntersecting, isLoading])

  const renderPosts = () => finalPosts.map((post, idx, { length }) => (
    <CollectionItem
      key={post.id}
      as={motion.li}
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
  ))

  if (layout === 'grid') {
    return (
      <PostCollectionContainer>
        <Masonry
          as={CollectionList}
          className='grid-layout' // default ''
          elementType={CollectionList} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          <AnimatePresence>
            {renderPosts()}
          </AnimatePresence>
        </Masonry>
        {!isLoading && finalPosts.length === 0 && <EmptyCollectionMsg>That's about it</EmptyCollectionMsg>}
        <Loader isLoading={isLoading} />
        <ScrollBtn />
      </PostCollectionContainer >
    );
  }

  return (
    <PostCollectionContainer>
      <CollectionList>
        <AnimatePresence>
          {renderPosts()}
        </AnimatePresence>
      </CollectionList>
      {!isLoading && finalPosts.length === 0 && <EmptyCollectionMsg>That's about it</EmptyCollectionMsg>}
      <Loader isLoading={isLoading} />
    </PostCollectionContainer >
  );
};

export default PostCollection;