import { postDataAPI, getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const COURSE_TYPES = {
  LOADING: "LOADING_COURSE",
  GET_USER_COURSES: "GET_USER_COURSES",
  GET_SEARCH_COURSES: "GET_SEARCH_COURSES",
};

export const getUserCourses = (data) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_TYPES.LOADING, payload: true });

    const res = await getDataAPI(`course/userAllCourse`, data.token);

    dispatch({
      type: COURSE_TYPES.GET_USER_COURSES,
      payload: res?.data,
    });

    dispatch({
      type: COURSE_TYPES.LOADING,
      payload: false,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err?.response?.data?.msg,
      },
    });
  }
};

export const getUserSingleCourse = (id, auth) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_TYPES.LOADING, payload: true });

    const userCourse = await postDataAPI(`/course`, { id }, auth.token);
    console.log(userCourse);
    dispatch({
      type: COURSE_TYPES.GET_USER_COURSES,
      payload: userCourse?.data,
    });

    dispatch({
      type: COURSE_TYPES.LOADING,
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

export const getSearchedCourse =
  ({ search, token }) =>
  async (dispatch) => {
    try {
      dispatch({ type: COURSE_TYPES.LOADING, payload: true });

      const res = await postDataAPI(`course/search`, { search }, token);

      console.log(res.data);

      dispatch({
        type: COURSE_TYPES.GET_SEARCH_COURSES,
        payload: res?.data,
      });

      dispatch({
        type: COURSE_TYPES.LOADING,
        payload: false,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

export const AddNewCourse = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const Course = await postDataAPI(`Course/addCourse`, data);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: Course.data.msg,
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
