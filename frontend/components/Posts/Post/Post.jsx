import React from 'react'
import { faShareSquare as iShare, faHeart as iHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { faCog as iConfig, faHeart as iHeartFull } from "@fortawesome/free-solid-svg-icons";
import { Card, Content } from './Post.styled';
import { HLink, FollowBtn } from './Header.styled';
import { ShareBox, Notes, NoteCount, Controls, IconBox, FAIcon } from './Footer.styled';

// ------------------------------------------ Header
export const Header = ({
  author,
  currentUser
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
export const Footer = ({ post, currentUser }) => {

  // const countNotes = () => {
  //   const { likeIds, reblogIds } = post

  //   return [likeIds, reblogIds].reduce((acc, arr) => acc + arr.length)
  // }

  const liked = true
  const authorIsUser = true

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
            hidden={!authorIsUser}
          />
          <FAIcon 
            icon={liked ? iHeartFull : iHeartEmpty}
            hidden={authorIsUser}
            liked={liked} 
          />
        </IconBox>
      </Controls>
    </ShareBox>
  )
}

// ------------------------------------------ Post
const Post = ({
  children,
  post,
  author,
  currentUser
}) => {


  const childProps = {
    post,
    author,
    currentUser
  }

  return (
    <Card>
      <Header {...childProps} />
      <Content {...childProps} >
        {children}
      </Content>
      <Footer {...childProps} />
    </Card>
  );
}

export default Post;