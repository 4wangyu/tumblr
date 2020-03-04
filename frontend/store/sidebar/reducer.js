import { Types } from './actions';

const _initialSidebar = {
  radarPostId: null,
  recommendedUserIds: []
};

const sidebarReducer = (state = _initialSidebar, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  switch (action.type) {
    case Types.RECEIVE_RADAR_POST:
      const { radarPostId } = action;
      return ({ ...state, radarPostId })
    case Types.RECEIVE_RECOMMENDED_USERS:
      const { recommendedUserIds } = action;
      return ({
        ...state,
        recommendedUserIds: [...state.recommendedUserIds, ...recommendedUserIds]
      })
    default:
      return state;
  }
};

export default sidebarReducer;