import React, { useEffect } from 'react';
import { selectRadarPostAndUser } from 'store/selectors';
import { Thunks as Sidebar } from 'store/sidebar/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  SidebarWidget,
  SidebarHeader, SidebarContent,
  SidebarBlog,
  BlogAvatar,
  BlogHeader, BlogHeaderUsername, BlogHeaderTitle,
  AddBlogIcon, AddBlogBtn,
  SidebarCard, SidebarCardImg,
  SidebarCardFooter, FooterNotes, FooterIcons
} from './SidebarWidgets.styled';
import { ReblogIcon, LikeIcon, IconBox } from 'styled/base/Icon.styled';

const RadarWidget = () => {
  const { radarPost, radarUser } = useSelector(selectRadarPostAndUser);

  const dispatch = useDispatch();
  const fetchRadarPost = () => dispatch(Sidebar.fetchRadarPost());

  useEffect(() => {
    fetchRadarPost();
  }, []);

  if (!radarPost) return null;

  const { avatarUrl, username, blogTitle = 'test' } = radarUser;

  const handleAddBlog = e => {

  }

  return (
    <SidebarWidget>
      <SidebarHeader>Radar</SidebarHeader>
      <SidebarContent>
        <SidebarBlog>
          <BlogAvatar src={avatarUrl} />
          <BlogHeader>
            <BlogHeaderUsername>{username}</BlogHeaderUsername>
            <BlogHeaderTitle>{blogTitle}</BlogHeaderTitle>
          </BlogHeader>
          <AddBlogBtn onClick={handleAddBlog}>
            <AddBlogIcon />
          </AddBlogBtn>
        </SidebarBlog>
      </SidebarContent>
      <SidebarContent padding>
        {<SidebarCard fullWidth={true}>
          <SidebarCardImg src={radarPost.imageAttachments[0].url} />
          <SidebarCardFooter>
            <FooterNotes>{5} notes</FooterNotes>
            <FooterIcons>
              <IconBox hidden>
                <ReblogIcon />
              </IconBox>
              <IconBox>
                <LikeIcon />
              </IconBox>
            </FooterIcons>
          </SidebarCardFooter>
        </SidebarCard>}
      </SidebarContent>
    </SidebarWidget>
  );
};

export default RadarWidget;