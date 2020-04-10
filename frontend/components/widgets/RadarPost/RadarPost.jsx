import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { selectPostsByCollection } from 'store/selectors';
import { WidgetContainer, WidgetHeader, WidgetContent } from '../widgets.styled';
import Post from "../../Post";

const RADAR = 'radar';

const RadarWidget = () => {

  const dispatch = useDispatch();
  const fetchRadarPost = () => dispatch(Posts.fetchPostsCollection(RADAR))
  const [radarPost] = useSelector(s => selectPostsByCollection(s, { collection: RADAR }));

  useEffect(
    () => {
      fetchRadarPost()
    },
    []
  );

  return (
    <WidgetContainer>
      <WidgetHeader>Radar</WidgetHeader>
      <WidgetContent pX={true} mT={true}>
        {radarPost && <Post post={radarPost} size="small" />}
      </WidgetContent>
    </WidgetContainer>
  );
};


export default RadarWidget;
