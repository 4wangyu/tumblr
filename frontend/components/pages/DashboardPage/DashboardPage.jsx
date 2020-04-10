import React from 'react'
import PostCollection from 'components/shared/PostCollection';
import RecommendedBlogs from 'components/widgets/RecommendedBlogs';
import RadarPost from 'components/widgets/RadarPost';
import { DashboardPageContainer } from './DashboardPage.styled';

const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <PostCollection
        collection="dashboard"
        infiniteScroll={true}
        layout="row"
      />
      <div>
        <RecommendedBlogs />
        <RadarPost />
      </div>
    </DashboardPageContainer>
  );
};

export default DashboardPage;