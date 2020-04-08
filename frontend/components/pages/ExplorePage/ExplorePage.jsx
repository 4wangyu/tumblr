import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ContentFilterContainer, FilterList, FilterLink } from './ExplorePage.styled';
import PostCollection from '../../shared/PostCollection';
import capitalize from 'util/capitalize';

const FILTERS = Object.freeze([
  "trending", "text", "photo", "quote", "link", "audio", "video"
])

const ExplorePage = () => {
  const { filter } = useParams()
  const history = useHistory();
  if (filter && !FILTERS.includes(filter)) history.replace('/explore/trending')

  let filterPosts = posts => {
    if (filter === 'trending')
      return posts;
    if (filter === 'photo')
      return posts.filter(({ contentType }) => contentType === 'ImageGallery');
    return posts.filter(({ contentType }) => contentType === capitalize(filter));
  };

  return (
    <div>
      <ContentFilterContainer>
        <FilterList>
          {FILTERS.map(filter => {
            const path = `/explore/${filter.toLowerCase()}`
            const innerHTML = capitalize(filter);
            return (
              <FilterLink
                key={filter}
                to={path}
              >
                {innerHTML}
              </FilterLink>
            )
          })}
        </FilterList>
      </ContentFilterContainer>
      <PostCollection
        collection="explore"
        layout="row"
        filter={filterPosts}
      />
    </div>
  )
}

export default ExplorePage;
