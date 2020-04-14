import React from 'react';
import { useParams } from 'react-router-dom';
import SearchControls from './SearchControls';
import SearchHeader from './SearchHeader';

const SearchPage = () => {
  const { query } = useParams();

  // fetch posts by search query
  // render in collection
  // if e



  return (
    <div>
      <SearchHeader query={'hi'} />
      <SearchControls />
      <h2>Query: {query}</h2>
    </div>
  );
};

export default SearchPage;
