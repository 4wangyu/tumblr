import React from 'react'
import PostCollection from 'components/shared/PostCollection';
import RecommendedBlogs from 'components/widgets/RecommendedBlogs';
import RadarPost from 'components/widgets/RadarPost';
import ComposePost from './ComposePost'
import { DashboardPageContainer, Sidebar } from './DashboardPage.styled';

const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <div>
        <ComposePost />
        <PostCollection
          collection="dashboard"
          infiniteScroll={true}
          layout="row"
        />
      </div>
      <Sidebar>
        <RecommendedBlogs />
        <RadarPost />
      </Sidebar>
    </DashboardPageContainer>
  );
};

export default DashboardPage;