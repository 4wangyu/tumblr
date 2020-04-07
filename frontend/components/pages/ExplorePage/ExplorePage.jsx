import React from 'react';
import { ContentFilterContainer, FilterList, FilterLink } from './ExplorePage.styled';

const FILTERS = Object.freeze([
  "Trending", "Text", "Photo", "Quote", "Link", "Audio", "Video"
])

const ExplorePage = () => {

  const renderFilters = () => FILTERS.map(filter => {
    const path = `/explore/${filter.toLowerCase()}`
    const innerHTML = filter.charAt(0).toUpperCase() + filter.slice(1);
    return <FilterLink to={path}>{innerHTML}</FilterLink>;
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
    </div>
  )
}

export default ExplorePage;
