export const fetchDashboard = ({ offset, limit }) => {
  return $.get({
    url: '/api/feed/dashboard',
    data: { offset, limit }
  });
};