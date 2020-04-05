import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { PostHeaderContainer, BlogLink, FollowBtn, UserAvatar } from './PostHeader.styled';
import { PostContext } from '../Post';

const PostHeader = () => {
  const dispatch = useDispatch();
  const { post, isLiked, userIsAuthor, author, isFollowingAuthor } = useContext(PostContext)
  const toggleUserFollow = (userId, isFollowing) => dispatch(Users.toggleUserFollow(userId, isFollowing));
  const handleFollow = e => toggleUserFollow(author.id, isFollowingAuthor);

  return (
    <PostHeaderContainer>
      <UserAvatar src={author.avatarAttachment.url} />
      <BlogLink to='/'>{author.username}</BlogLink>
      {userIsAuthor && !isFollowingAuthor && <FollowBtn onClick={handleFollow}>Follow</FollowBtn>}
    </PostHeaderContainer>
  )
};

export default PostHeader;


