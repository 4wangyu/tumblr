import React from 'react'
import ReblogHeader from './ReblogHeader';
import ReblogFooter from './ReblogFooter';
import { Card, CardContent } from 'styled/base/Card.styled';

const Reblog = () => {
  return (
    <Card>
      <ReblogHeader />
      <CardContent noPadding={true}>
        {getContent(post)[post.contentType]}
        <ReblogContent>
          <ReblogImgCube avatarUrl={postReblogger.avatarUrl} />
          <ReblogContentText>{post.reblogCaption}</ReblogContentText>
        </ReblogContent>
        <ReblogSourceLink to="/">Source: {postAuthor.username}</ReblogSourceLink>}
      </CardContent>
      <ReblogFooter />
    </Card>
  )
}

export default Reblog;
