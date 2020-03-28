import React from 'react';
import RadarPostWidget from './RadarPost';
import RecommendedUsersWidget from './RecommendedUsers';

const Sidebar = () => {
  return (
    <>
      <RecommendedUsersWidget />
      <RadarPostWidget />
    </>
  );
};

export default Sidebar;