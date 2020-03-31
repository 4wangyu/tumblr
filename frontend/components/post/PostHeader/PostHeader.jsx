import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { CardHeader, BlogLink, FollowBtn } from './PostHeader.styled';
import { PostContext } from '../Post';

const PostHeader = () => {
  const dispatch = useDispatch();
  const { post, isLiked, userIsAuthor, author, isFollowingAuthor } = useContext(PostContext)
  const toggleUserFollow = (userId, isFollowing) => dispatch(Users.toggleUserFollow(userId, isFollowing));
  const handleFollow = e => toggleUserFollow(author.id, isFollowingAuthor);

  return (
    <CardHeader>
      <BlogLink to='/'>{author.username}</BlogLink>
      {userIsAuthor && !isFollowingAuthor && <FollowBtn onClick={handleFollow}>Follow</FollowBtn>}
    </CardHeader>
  )
};

export default PostHeader;


