import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import capitalize from 'util/capitalize';
import PostCollection from 'components/organisms/PostCollection';

export const FILTERS = Object.freeze([
  "trending", "text", "photo", "quote", "link", "audio", "video"
]);

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
    <PostCollection
      collection="dashboard"
      filter={filterPosts}
      infiniteScroll={true}
      layout="grid" // CAUTION: Changing to layout="row" will cause <PostAvatar>(s) to become partially obscured, due to to <ExploreNAv>
    />
  );
};

export default ExplorePage;
