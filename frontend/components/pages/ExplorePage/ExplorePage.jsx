import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Thunks as Posts } from 'store/posts/actions';
import { selectPostsByCollection } from 'store/selectors';
import { ContentFilterContainer, FilterList, FilterLink } from './ExplorePage.styled';
import PostCollection from '../../shared/PostCollection';
import capitalize from 'util/capitalize';
import compareCreatedAt from 'util/compare_created_at'

const FILTERS = Object.freeze([
  "trending", "text", "photo", "quote", "link", "audio", "video"
])

const ExplorePage = () => {
  const { filter } = useParams()
  const history = useHistory();
  if (filter && !FILTERS.includes(filter)) history.replace('/explore/trending')

  const dispatch = useDispatch();
  const fetchExplorePosts = filters => dispatch(Posts.fetchPostsCollection('explore', filters));

  let posts = useSelector(state => selectPostsByCollection(state, { collection: 'explore' }));

  let sortedPosts = useMemo(() => {
    if (filter === 'trending') return posts;
    if (filter === 'photo') return posts.filter(({ contentType }) => contentType === 'ImageGallery')
    return posts.filter(({ contentType }) => contentType === capitalize(filter))
  }, [posts, filter])



  useEffect(() => {
    fetchExplorePosts({});
  }, []);

  const renderFilters = () => FILTERS.map(filter => {
    const path = `/explore/${filter.toLowerCase()}`
    const innerHTML = capitalize(filter);
    return (
      <FilterLink
        key={filter}
        to={path}
      >
        {innerHTML}
      </FilterLink>
    );
  })

  // Router Rules
  // Path is "/explore" ore "/explore/:filter" where filter isn't in FILTERS
  // -> should redirect to sub-path "/explore/trending" 

  return (
    <div>
      <ContentFilterContainer>
        <FilterList>
          {renderFilters()}
        </FilterList>
      </ContentFilterContainer>
      <PostCollection posts={sortedPosts} />
    </div>
  )
}

export default ExplorePage;
