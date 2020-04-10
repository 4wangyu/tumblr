import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { selectUsersByCollection } from 'store/selectors';
import { WidgetContainer, WidgetHeader, WidgetContent } from '../widgets.styled';
import BlogList from './BlogList';

const RecommendedBlogsWidget = () => {

  const dispatch = useDispatch();
  // Return at most 10 users
  const fetchRecommendedUsers = () => dispatch(Users.fetchUsersCollection('recommended'));
  let users = useSelector(state => selectUsersByCollection(state, { collection: 'recommended' }));

  useEffect(() => {
    fetchRecommendedUsers();
  }, []);

  return (
    <WidgetContainer>
      <WidgetHeader>Recommended Blogs</WidgetHeader>
      <WidgetContent>
        <BlogList users={users} />
      </WidgetContent>
    </WidgetContainer>
  );
};

export default RecommendedBlogsWidget;