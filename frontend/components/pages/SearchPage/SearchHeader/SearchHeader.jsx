import React from 'react'
import { SearchHeaderContainer, SearchTitle, SearchSuggestions } from './SearchHeader.styled';

const SearchHeader = ({ query }) => {
  return (
    <SearchHeaderContainer>
      <SearchTitle>{query}</SearchTitle>
    </SearchHeaderContainer>
  )
}

export default SearchHeader;
