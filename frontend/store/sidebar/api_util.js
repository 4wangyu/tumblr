export const fetchRadarPost = () => {
  return $.get({ url: '/api/sidebar/radar_post' });
};

export const fetchRecommendedUsers  = ({ offset, limit }) => {
  return $.get({
    url: '/api/sidebar/recommended_users',
    data: { offset, limit }
  });
};