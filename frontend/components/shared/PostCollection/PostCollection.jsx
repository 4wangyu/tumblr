import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { selectPostsByCollection } from 'store/selectors';
import { PostCollectionContainer, CollectionList, CollectionItem } from './PostCollection.styled';
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
  const fetchCollection = filters => dispatch(Posts.fetchPostsCollection('explore', filters));
  let posts = useSelector(state => selectPostsByCollection(state, { collection }));

  const finalPosts = useMemo(() => {
    if (!(posts instanceof Array)) return [];
    let filteredPosts = filter(posts);
    return filteredPosts.sort(compareCreatedAt)
  }, [posts]);
  const postSize = useMemo(() => layout === "grid" ? "small" : "large", [layout]);

  useEffect(() => {
    fetchCollection({ limit: 2, offset: 0 });
  }, []);

  // Pag
  const [offset, limit, setCount, end] = usePagination(1);

  // Loading
  const [isLoading, setLoading] = useState(false);

  // loadCollection
  const loadCollection = () => {
    if (loading) return;
    setLoading(true);
    fetchCollection({ offset, limit })
      .then(({ postCount }) => {
        setCount(postCount);
        setLoading(false)
      });
  };

  // Intersect
  const [ref, entry] = useIntersect({
    threshold: [0, 0.5]
  });

  useEffect(() => {
    if (infiniteScroll && entry.isIntersecting) {
      () => loadCollection();
    }
  }, [infiniteScroll, entry.isIntersecting])

  return (
    <PostCollectionContainer layout={layout}>
      <CollectionList>
        {finalPosts.map((post, idx, arr) => (
          <CollectionItem key={idx} ref={idx === arr.length - 1 ? ref : null}>
            <Post post={post} size={postSize} />
          </CollectionItem>
        ))}
      </CollectionList>
      <Loader isLoading={isLoading} />
      <ScrollBtn />
    </PostCollectionContainer>
  );
};

export default PostCollection;