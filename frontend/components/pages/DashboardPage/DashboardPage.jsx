import React from 'react'
import PostCollection from 'components/organisms/PostCollection';
import RecommendedBlogs from 'components/widgets/RecommendedBlogs';
import RadarPost from 'components/widgets/RadarPost';
import ComposePost from './ComposePost'
import { DashboardPageContainer, Sidebar } from './DashboardPage.styled';
import { useBreakpoint } from 'contexts/BreakpointContext';

const DashboardPage = () => {

  const { md } = useBreakpoint();
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
      {!md && <Sidebar>
        <RecommendedBlogs />
        <RadarPost />
      </Sidebar>}
    </DashboardPageContainer>
  );
};

export default DashboardPage;