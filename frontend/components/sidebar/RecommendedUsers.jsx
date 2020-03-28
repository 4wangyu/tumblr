import React, { useEffect } from 'react';
import { selectRecommendedUsers } from 'store/selectors';
import { Thunks as Sidebar } from 'store/sidebar/actions';
import { useSelector, useDispatch } from 'react-redux';
import usePagination from 'hooks/usePagination';
import {
  SidebarWidget,
  SidebarHeader, SidebarContent,
  SidebarBlogList,
} from './Sidebar.styled';
import BlogBar from './BlogBar';

const RecommendedBlogsWidget = () => {

  const recommendedBlogs = useSelector(selectRecommendedUsers);

  const dispatch = useDispatch();
  const fetchRecommendedUsers = filters => dispatch(Sidebar.fetchRecommendedUsers(filters));

  const [offset, limit, setCount, end] = usePagination(5);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRecommendedUsers();
  }, []);

  const loadRecommendedUsers = () => {
    fetchRecommendedUsers({ offset, limit })
      .then(({ count }) => {
        setCount(count);
      });
  };

  return (
    <SidebarWidget>
      <SidebarHeader>Recommended Blogs</SidebarHeader>
      <SidebarContent>
        <SidebarBlogList>
          {recommendedBlogs && Object.values(recommendedBlogs).slice(0, 5).map(user => (
            <BlogBar
              key={user.id}
              user={user}
              variant="list_item"
            />
          ))}
        </SidebarBlogList>
      </SidebarContent>
    </SidebarWidget>
  );
};

export default RecommendedBlogsWidget;