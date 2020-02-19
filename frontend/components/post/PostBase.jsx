import React from 'react'
import { faShareSquare as iShare, faHeart as iHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faCog as iConfig, faHeart as iHeartFull } from '@fortawesome/free-solid-svg-icons';
import { Card, Content } from './PostBase.styled';
import { HLink, FollowBtn } from './PostHeader.styled';
import { ShareBox, Notes, NoteCount, Controls, IconBox, FAIcon } from './PostFooter.styled';

// ------------------------------------------ Header
export const Header = ({
  currentUser,
  author,
}) => {

  const handleFollow = e => {

  }

  return (
    <div>
      <HLink>{author.username}</HLink>
      {(author.id !== currentUser.id) && <FollowBtn onClick={handleFollow} />}
    </div>
  )
};

// ------------------------------------------ Footer
export const Footer = ({
  currentUser,
  post,
  author,
  togglePostLike
}) => {

  // const countNotes = () => {
  //   const { likeIds, reblogIds } = post

  //   return [likeIds, reblogIds].reduce((acc, arr) => acc + arr.length)
  // }

  const liked = post.likerIds.includes(currentUser.id);
  const currentUserIsAuthor = post.userId === currentUser.id;
  const handleLike = () => togglePostLike(post.id, liked);

  return (
    <ShareBox>
      <Notes>
        <NoteCount>{'23,468'} notes</NoteCount>
      </Notes>
      <Controls>
        <IconBox>
          <FAIcon icon={iShare} />
        </IconBox>
        <IconBox>
          <FAIcon
            icon={iConfig}
            hidden={!currentUserIsAuthor}
          />
          <FAIcon
            onClick={handleLike}
            icon={liked ? iHeartFull : iHeartEmpty}
            hidden={currentUserIsAuthor}
            liked={liked}
          />
        </IconBox>
      </Controls>
    </ShareBox>
  )
}

// ------------------------------------------ Post
const Post = ({
  currentUser,
  post,
  author,
  togglePostLike,
  children,
}) => {


  const childProps = {
    currentUser,
    post,
    togglePostLike,
    author
  }

  return (
    <Card>
      <Header {...childProps} />
      <Content>
        {children}
      </Content>
      <Footer {...childProps} />
    </Card>
  );
}

export default Post;