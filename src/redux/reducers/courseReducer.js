import { COURSE_TYPES } from "../actions/courseAction";

const initialState = {
  loading: true,
  data: [],
  results: 0,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case COURSE_TYPES.GET_USER_COURSES:
      return {
        ...state,
        data: action.payload.courses,
        results: action.payload.courses.length,
      };
    case COURSE_TYPES.GET_SEARCH_COURSES:
      return {
        ...state,
        data: action.payload.courses,
        results: action.payload.courses.length,
      };

    default:
      return state;
  }
};

export default courseReducer;
