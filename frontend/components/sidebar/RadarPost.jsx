import React, { useEffect } from 'react';
import { selectRadarPostAndUser } from 'store/selectors';
import { Thunks as Sidebar } from 'store/sidebar/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  SidebarWidget,
  SidebarHeader, SidebarContent,
  SidebarCard, SidebarCardImg,
  SidebarCardFooter, FooterNotes, FooterIcons
} from './Sidebar.styled';
import { ReblogIcon, LikeIcon, IconBox } from 'styled/base/Icon.styled';
import BlogBar from './BlogBar';

const RadarWidget = () => {
  const { radarPost, radarUser } = useSelector(selectRadarPostAndUser);

  const dispatch = useDispatch();
  const fetchRadarPost = () => dispatch(Sidebar.fetchRadarPost());

  useEffect(() => {
    fetchRadarPost();
  }, []);

  return (
    <SidebarWidget>
      <SidebarHeader>Radar</SidebarHeader>
      <SidebarContent>
        <BlogBar user={radarUser} />
      </SidebarContent>
      <SidebarContent padding>
        {<SidebarCard fullWidth={true}>
          <SidebarCardImg src={radarPost && radarPost.imageAttachments[0].url} />
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