import { postDataAPI, getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const QUESTION_TYPES = {
  LOADING: "LOADING_QUESTION",
  GET_QUESTION: "GET_QUESTION_USER",
  GET_ALL_QUESTION: "GET_ALL_QUESTION_USER",
};

export const getAllQuestions =
  ({ auth }) =>
  async (dispatch) => {
    try {
      dispatch({ type: QUESTION_TYPES.LOADING, payload: true });

      const res = await getDataAPI(`question/all`, auth.token);

      dispatch({
        type: QUESTION_TYPES.GET_ALL_QUESTION,
        payload: res?.data,
      });

      dispatch({
        type: QUESTION_TYPES.LOADING,
        payload: false,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

export const questionSubmit =
  ({ data, token }) =>
  async (dispatch) => {
    try {
      const res = await postDataAPI(`question/questionSubmit`, { data }, token);

      dispatch({ type: GLOBALTYPES.ALERT, payload: true });

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res?.data?.msg,
        },
      });
      window.location.href = "/home";
    } catch (err) {
      console.log(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

export const AllQuestionsId = () => async (dispatch) => {
  let question = {};
  try {
    dispatch({ type: QUESTION_TYPES.LOADING, payload: true });

    question = await getDataAPI(`question/AllQuestionsId`);

    dispatch({
      type: QUESTION_TYPES.GET_ALL_QUESTION,
      payload: question?.data,
    });

    dispatch({
      type: QUESTION_TYPES.LOADING,
      payload: false,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const AddNewQuestion = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const question = await postDataAPI(`question/addQuestion`, data);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: question.data.msg,
      },
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};
