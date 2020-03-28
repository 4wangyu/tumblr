import React, { useEffect } from 'react';
import { selectRecommendedUsers } from 'store/selectors';
import { Thunks as Sidebar } from 'store/sidebar/actions';
import { useSelector, useDispatch } from 'react-redux';
import usePagination from 'hooks/usePagination';
import {
  SidebarWidget,
  SidebarHeader, SidebarContent,
  SidebarBlogList, SidebarBlogItem,
  BlogAvatar,
  BlogHeader, BlogHeaderUsername, BlogHeaderTitle,
  AddBlogIcon, AddBlogBtn, RemoveBlogIcon
} from './SidebarWidgets.styled';

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


  const handleAddBlog = e => {

  };

  return (
    <SidebarWidget>
      <SidebarHeader>Recommended Blogs</SidebarHeader>
      <SidebarContent>
        <SidebarBlogList>
          {recommendedBlogs && Object.values(recommendedBlogs).slice(0, 5).map(({
            avatarUrl, username, blogTitle = ''
          }) => (
              <SidebarBlogItem key={`blog-${username}`} data-blog={`blog-${username}`}>
                <BlogAvatar src={avatarUrl} />
                <BlogHeader>
                  <BlogHeaderUsername>{username}</BlogHeaderUsername>
                  <BlogHeaderTitle>{blogTitle}</BlogHeaderTitle>
                </BlogHeader>
                <AddBlogBtn>
                  <AddBlogIcon />
                </AddBlogBtn>
                <RemoveBlogIcon />
              </SidebarBlogItem>
            ))}
        </SidebarBlogList>
      </SidebarContent>
    </SidebarWidget>
  );
};

export default RecommendedBlogsWidget;