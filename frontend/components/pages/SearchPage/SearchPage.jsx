import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SearchPageContainer } from './SearchPage.styled'
import PostCollection from 'components/shared/PostCollection';
import SearchControls from './SearchControls';
import SearchHeader from './SearchHeader';
import capitalize from 'util/capitalize';

const SearchPage = () => {
  const { query, filter } = useParams();

  let content_type = useMemo(() => {
    if (!Boolean(filter)) return undefined;
    switch (filter) {
      case 'photo':
        return 'ImageGallery';
      default:
        return capitalize(filter);
    }
  }, [filter])

  let filterPosts = useCallback(posts => {
    if (content_type === undefined)
      return posts;
    return posts.filter(({ contentType }) => contentType === content_type);
  }, [content_type]);

  return (
    <SearchPageContainer>
      <SearchHeader query={query} />
      <SearchControls />
      <PostCollection
        key={query}
        collection="search"
        filter={filterPosts}
        filters={{ content_type, query }}
        infiniteScroll={true}
        layout="row"
      />
    </SearchPageContainer>
  );
};

export default SearchPage;
