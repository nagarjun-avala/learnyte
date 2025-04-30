import { QUESTION_TYPES } from "../actions/questionAction";

const initialState = {
  loading: true,
  data: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case QUESTION_TYPES.GET_ALL_QUESTION:
      return {
        ...state,
        data: [...action.payload.questions],
      };
    case QUESTION_TYPES.GET_QUESTION:
      return {
        ...state,
        data: [...action.payload.question],
      };

    default:
      return state;
  }
};

export default questionReducer;
