import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectUserById } from 'store/selectors';
import { Card, CardContent } from 'styled/base/Card.styled';
import {
  ReblogContent, ReblogImgCube, ReblogContentText, ReblogSourceLink,
  TagIndex, Tag
} from './Post.styled';
import PostHeader from './PostHeader';
import ImageGallery from './post-content/ImageGalleryContent';
import Video from './post-content/VideoContent';
import Audio from './post-content/AudioContent';
import Link from './post-content/LinkContent';
import Quote from './post-content/QuoteContent';
import Text from './post-content/TextContent';
import PostFooter from './PostFooter';

const Post = ({ post }) => {
  const [currentUser, postAuthor, postReblogger] = useSelector(state => [
    selectCurrentUser(state),
    selectUserById(state, { userId: post.userId }),
    post.isReblog ? selectUserById(state, { userId: post.rebloggerId }) : null,
  ]);
  // const postReblogger = useSelect(state => selectUserById(state, { userId: ?}));

  const getContent = postData => ({
    ImageGallery: <ImageGallery post={postData} />,
    Video: <Video post={postData} />,
    Audio: <Audio post={postData} />,
    Link: <Link post={postData} />,
    Quote: <Quote post={postData} />,
    Text: <Text post={postData} />
  });


  const showReblogSource = post.isReblog && post.parentId;
  const showReblogContent = post.isReblog && post.reblogCaption;

  return (
    <Card>
      <PostHeader
        currentUser={currentUser}
        postAuthor={postAuthor}
        postReblogger={postReblogger}
      />
      <CardContent noPadding={true}>
        {getContent(post)[post.contentType]}
        {showReblogContent && (
          <ReblogContent>
            <ReblogImgCube avatarUrl={postReblogger.avatarUrl} />
            <ReblogContentText>{post.reblogCaption}</ReblogContentText>
          </ReblogContent>
        )}
        {showReblogSource && <ReblogSourceLink to="/">Source: {postAuthor.username}</ReblogSourceLink>}
        {post.tags.length > 0 && <TagIndex>{post.tags.map((tag, idx) => <Tag key={`tag-${idx}`}>#{tag}</Tag>)}</TagIndex>}
      </CardContent>
      <PostFooter
        currentUser={currentUser}
        post={post}
      />
    </Card >
  );
};




export default Post;