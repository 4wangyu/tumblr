import React, { useState } from 'react';
import { BlogListContainer } from './BlogList.styled'
import BlogItem from './BlogItem';
import { WidgetLink } from '../../widgets.styled';
const BlogList = ({ users }) => {

  const [removedBlogs, setRemovedBlogs] = useState([]);

  const handleRemoveItem = userId => () => {
    setRemovedBlogs(prev => [...prev, userId])
  };

  return (
    <BlogListContainer>
      {users?.filter(({ id }) => !removedBlogs.includes(id))
        .slice(0, 5)
        .map(user =>
          <BlogItem
            handleRemove={handleRemoveItem(user.id)}
            key={user.id}
            user={user}
          />
        )
      }
      <WidgetLink to="/explore/trending">Explore all of Tumblr</WidgetLink>
    </BlogListContainer>
  );
};

export default BlogList;
