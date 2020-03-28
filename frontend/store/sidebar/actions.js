import { createActions } from 'reduxsauce';
import { Creators as Users } from 'store/users/actions';
import { Creators as Posts } from 'store/posts/actions';
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveRadarPost: ['radarPostId'],
  receiveRecommendedUsers: ['recommendedUserIds'],
  removeRecommendedUser: ['recommendedUserId'],
}, {});

export const Thunks = {};

Thunks.fetchRadarPost = () => dispatch => {
  return APIUtil.fetchRadarPost()
    .then(({ user, post }) => {
      dispatch(Users.receiveUser(user))
      dispatch(Posts.receivePost(post))
      dispatch(Creators.receiveRadarPost(post.id));
    });
}

Thunks.fetchRecommendedUsers = filters => dispatch => {
  return APIUtil.fetchRecommendedUsers(filters)
    .then((users, status, xhr) => {
      let count = parseInt(xhr.getResponseHeader('X-Recommended-Users-Count'));
      dispatch(Users.receiveUsers(users));
      dispatch(Creators.receiveRecommendedUsers(Object.keys(users)));
      return ({ count })
    });
};
