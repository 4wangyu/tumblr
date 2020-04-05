import React, { useEffect } from 'react';
import { selectRadarPostAndUser } from 'store/selectors';
import { Thunks as Sidebar } from 'store/sidebar/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  SidebarWidget,
  SidebarHeader, SidebarContent
} from './Sidebar.styled';
import Post from "../Post";

const RadarWidget = () => {
  const { radarPost } = useSelector(selectRadarPostAndUser);

  const dispatch = useDispatch();
  const fetchRadarPost = () => dispatch(Sidebar.fetchRadarPost());

  useEffect(() => {
    fetchRadarPost();
  }, []);

  return (
    <SidebarWidget>
      <SidebarHeader>Radar</SidebarHeader>
      <SidebarContent pX={true} mT={true}>
        {radarPost && <Post post={radarPost} size="small" />}
      </SidebarContent>
    </SidebarWidget>
  );
};

export default RadarWidget;