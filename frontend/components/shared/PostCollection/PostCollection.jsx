import React from 'react';
import { PostCollectionContainer, CollectionList, CollectionItem } from './PostCollection.styled';
import Post from '../../Post';

const PostCollection = ({ posts }) => {

  return (
    <PostCollectionContainer>
      <CollectionList>
        {posts.map((post, idx) => (
          <CollectionItem key={idx}>
            <Post post={post} size="small" />
          </CollectionItem>
        ))}
      </CollectionList>
    </PostCollectionContainer>
  );
};

export default PostCollection;
