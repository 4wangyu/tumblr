import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveReblogs: ['reblogs'],
  receiveReblog: ['reblog'],
  createReblog: ['reblog'],
  updateReblog: ['reblog'],
  removeReblog: ['reblogId']
}, {});

export const Thunks = {};

Thunks.fetchReblog = reblogId => dispatch => {
  return APIUtil.fetchReblog(reblogId)
    .then(reblog => dispatch(Creators.receiveReblog(reblog)));
}

Thunks.createReblog = formReblog => dispatch => {
  return APIUtil.createReblog(formReblog)
    .then(reblog => dispatch(Creators.receiveReblog(reblog)));
};

Thunks.updateReblog = formReblog => dispatch => {
  return APIUtil.updateReblog(formReblog)
    .then(reblog => dispatch(Creators.receiveReblog(reblog)));
};

Thunks.destroyReblog = reblogId => dispatch => {
  return APIUtil.destroyReblog(reblogId)
    .then(reblogId => dispatch(Creators.removeReblog(reblogId)));
};