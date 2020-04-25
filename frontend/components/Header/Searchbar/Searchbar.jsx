import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  SearchbarContainer, SearchbarInput, LoaderBox,
  ResultsContainer, ResultsSection, ResultsHeader,
  ResultsList, ResultsItem, ResultsItemLink, Underline as U,
  ResultsTitle, ResultsText, ResultsSubtext, SearchIcon
} from './Searchbar.styled';
import Popover from 'components/molecules/Popover';
import FollowBtn from 'components/atoms/FollowBtn';
import Loader from 'components/atoms/Loader';
import UserAvatar from 'components/atoms/UserAvatar';

const Searchbar = () => {

  const match = useRouteMatch('/search/:query');
  const query = useMemo(() => match?.params?.query || '');
  const [searchField, setSearchField] = useState('')
  const history = useHistory();

  useEffect(
    () => {
      setSearchField(query);
    },
    [query]
  );
  const [{ usersLoading, tagsLoading }, setLoading] = useState({ usersLoading: false, tagsLoading: false });
  const isLoading = useMemo(() => usersLoading || tagsLoading, [usersLoading, tagsLoading]);
  const startLoading = () => setLoading({ usersLoading: true, tagsLoading: true });
  const usersLoaded = () => setLoading(prev => ({ ...prev, usersLoading: false }))
  const tagsLoaded = () => setLoading(prev => ({ ...prev, tagsLoading: false }));

  const [{ users, tags }, setEntities] = useState({ users: [], tags: [] })


  const loadData = ({ query }) => {
    if (isLoading) return;
    startLoading();
    setTimeout(() => {
      $.get({ url: '/api/users/search', data: { query } })
        .then(freshUsers => {
          setEntities(prev => ({ ...prev, users: Object.values(freshUsers) }))
          usersLoaded();
        });
      $.get({ url: '/api/tags/search', data: { query, limit: 6, } })
        .then(freshTags => {
          setEntities(prev => ({ ...prev, tags: freshTags }))
          tagsLoaded();
        });
    }, 300)
  }

  const [popoverOpen, setPopoverOpen] = useState(false);
  const openPopover = () => setPopoverOpen(true);
  const closePopover = () => setPopoverOpen(false);

  const handleInput = e => {
    const { value } = e.target;
    setSearchField(value);
    if (!popoverOpen) openPopover();
    value.length ? loadData({ query: value }) : setEntities({ users: [], tags: [] });
  };



  const handleSubmit = e => {
    e.preventDefault();
    closePopover();
    if (searchField.length) history.push(`/search/${searchField}`);
  };

  const finalTags = useMemo(() =>
    searchField.length ?
      [...new Set([searchField, ...tags.slice(0, 4)])] :
      [...new Set(tags.slice(0, 5))],
    [searchField, tags]
  );

  const renderTagResults = () => finalTags.map((tag, idx) => (
    <ResultsItemLink key={idx} to={`/search/${tag}`} >
      <SearchIcon />
      <ResultsTitle>
        <ResultsText>{tag}</ResultsText>
      </ResultsTitle>
    </ResultsItemLink>
  ))

  const renderUserResults = () => users.map(user => {
    const { id, username, title, avatarAttachment } = user;
    return (
      <ResultsItem key={id}>
        <UserAvatar avatarAttachment={avatarAttachment} size='medium'/>
        <ResultsTitle>
          <ResultsText>{username}</ResultsText>
          <ResultsSubtext>{title}</ResultsSubtext>
        </ResultsTitle>
        <FollowBtn user={user}>Follow</FollowBtn>
      </ResultsItem>
    );
  });

  return (
    <SearchbarContainer onSubmit={handleSubmit}>
      <SearchbarInput
        onChange={handleInput}
        value={searchField}
      />
      <LoaderBox>
        <Loader isLoading={isLoading} size='small' />
      </LoaderBox>
      <Popover
        isOpen={popoverOpen}
        onClickOutside={closePopover}
        width="100%"
        top="4rem"
      >
        <ResultsContainer>
          <ResultsSection>
            <ResultsList>
              {renderTagResults()}
            </ResultsList>
          </ResultsSection>
          <ResultsSection>
            {users.length > 0 && <ResultsHeader>Tumblrs</ResultsHeader>}
            <ResultsList>
              {renderUserResults()}
            </ResultsList>
          </ResultsSection>
        </ResultsContainer>
      </Popover>
    </SearchbarContainer>
  );
};

export default Searchbar;