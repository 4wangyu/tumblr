import React from 'react';
import { Thunks as Users } from 'store/users/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCurrentUser } from 'store/selectors';
import { FollowBtnContainer, Button } from './FollowBtn.styled';

const FollowBtn = ({ user }) => {
  const currentUser = useSelector(selectCurrentUser);
  const currentUserIsFollowing = Boolean(currentUser) && currentUser.followeeIds.includes(user.id);
  const currentUserIsUser = currentUser?.id === user.id
  const dispatch = useDispatch();
  const handleFollow = () => dispatch(Users.toggleUserFollow(user.id, currentUserIsFollowing));
  const history = useHistory();

  const handleClick = e => {
    e.stopPropagation();
    if (currentUser) {
      handleFollow();
    } else {
      history.push('/login');
    }
  }
  return (
    <FollowBtnContainer onClick={handleClick}>
      {(!currentUserIsUser && !currentUserIsFollowing) && <Button title={`Follow @${user.username}`}>Follow</Button>}
    </FollowBtnContainer>
  );
};

export default FollowBtn;


