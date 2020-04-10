import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { selectPostsByCollection } from 'store/selectors';
import { PostCollectionContainer, CollectionList, CollectionItem, EmptyCollectionMsg } from './PostCollection.styled';
import Post from '../../Post';
import ScrollBtn from './ScrollBtn';
import Loader from './Loader';
import compareCreatedAt from 'util/compare_created_at';
import usePagination from 'hooks/usePagination';
import useIntersect from 'hooks/useIntersect';

const PostCollection = ({
  collection,
  layout = 'row',
  infiniteScroll = false,
  filter = posts => posts
}) => {

  // Redux
  const dispatch = useDispatch();
  const fetchCollection = filters => dispatch(Posts.fetchPostsCollection(collection, filters));
  let posts = useSelector(state => selectPostsByCollection(state, { collection }));

  // Sort and Filter
  const finalPosts = useMemo(() => {
    if (!(posts instanceof Array)) return [];
    let filteredPosts = filter(posts);
    return filteredPosts.sort(compareCreatedAt)
  }, [posts]);
  const postSize = useMemo(() => layout === "grid" ? "small" : "large", [layout]);

  // Pagination
  const { offset, limit, setCount, hasNext } = usePagination({ increment: 3 });

  useEffect(() => {
    fetchCollection({ limit: 2, offset: 0 });
  }, []);

  // Loading State
  const [isLoading, setLoading] = useState(false);
 
  // Intersection Observer
  const [$lastPost, entry] = useIntersect({
    threshold: [0, 0.5]
  });

  // Infinite Scroll
  const loadCollection = () => {
    if (isLoading) return;
    setLoading(true);
    fetchCollection({ offset, limit })
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

  return (
    <PostCollectionContainer layout={layout}>
      {finalPosts.length > 0 ? <CollectionList>
        {finalPosts.map((post, idx, { length }) => (
          <CollectionItem key={idx} ref={idx === length - 1 ? $lastPost : null}>
            <Post post={post} size={postSize} />
          </CollectionItem>
        ))}
      </CollectionList> : <EmptyCollectionMsg>That's about it.</EmptyCollectionMsg>}
      <Loader isLoading={isLoading} />
      <ScrollBtn />
    </PostCollectionContainer>
  );
};

export default PostCollection;