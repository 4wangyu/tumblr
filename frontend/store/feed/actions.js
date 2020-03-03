import { Creators as Users } from 'store/users/actions';
import { Creators as Posts } from 'store/posts/actions';
import { Creators as Reblogs } from 'store/reblogs/actions';
import * as APIUtil from './api_util';

export const Thunks = {};
Thunks.fetchDashboard = filters => (dispatch) => {
  return APIUtil.fetchDashboard(filters)
    .then(({ users, posts, reblogs }, status, xhr) => {
      let count = parseInt(xhr.getResponseHeader('X-Post-Reblog-Count'));
      dispatch(Users.receiveUsers(users));
      dispatch(Posts.receivePosts(posts));
      dispatch(Reblogs.receiveReblogs(reblogs));
      return ({ count })
    });
};