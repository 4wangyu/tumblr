import React, { useState, useEffect } from 'react';
import { selectAllUsers, selectAllPosts } from 'store/selectors';
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

  const [radarUser] = Object.values(useSelector(selectAllUsers));
  const posts = useSelector(selectAllPosts);

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
        {posts.length && <SidebarCard fullWidth={true}>
          <SidebarCardImg src={posts[0].imageUrls[0]} />
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