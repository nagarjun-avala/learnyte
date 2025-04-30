import { PROFILE_TYPES } from "../actions/profileAction";

const initialState = {
  loading: false,
  ids: [],
  user: [],
  interestedCourses: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case PROFILE_TYPES.GET_USER:
      return {
        ...state,
        users: [...state.user, action.payload.user],
      };

    case PROFILE_TYPES.GET_ID:
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };

    default:
      return state;
  }
};

export default profileReducer;
