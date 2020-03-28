import { Types } from './actions';

const _initialSidebar = {
  radarPostId: null,
  recommendedUserIds: []
};

const sidebarReducer = (state = _initialSidebar, action) => {
  Object.freeze(state);
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
    case Types.REMOVE_RECOMMENDED_USER:
      const { recommendedUserId } = action;
      const newRecommendedUserIds = state.recommendedUserIds.filter(id => id != recommendedUserId);
      return ({
        ...state,
        recommendedUserIds: newRecommendedUserIds
      })
    default:
      return state;
  }
};

export default sidebarReducer;