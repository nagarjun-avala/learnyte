import { GLOBALTYPES, DeleteData } from "./globalTypes";
import { getDataAPI, patchDataAPI } from "../../utils/fetchData";

export const PROFILE_TYPES = {
  LOADING: "LOADING_PROFILE",
  GET_USER: "GET_PROFILE_USER",
  GET_ID: "GET_PROFILE_ID",
};

export const getProfileUsers =
  ({ id, auth }) =>
  async (dispatch) => {
    dispatch({ type: PROFILE_TYPES.GET_ID, payload: id });

    try {
      dispatch({ type: PROFILE_TYPES.LOADING, payload: true });
      const res = getDataAPI(`/user/${id}`, auth.token);

      const users = await res;

      dispatch({
        type: PROFILE_TYPES.GET_USER,
        payload: users?.data,
      });

      dispatch({
        type: PROFILE_TYPES.LOADING,
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

export const updateProfileUser =
  ({ userData, auth }) =>
  async (dispatch) => {
    if (!userData.given_name)
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: "Please add your first name.",
        },
      });
    if (!userData.family_name)
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: "Please add your family name.",
        },
      });

    let fullName = `${userData.given_name} ${userData.family_name}`;

    try {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          loading: true,
        },
      });

      const res = await patchDataAPI(
        "user",
        {
          ...userData,
          fullname: fullName,
        },
        auth.token
      );

      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          ...auth,
          user: {
            ...auth.user,
            ...userData,
          },
        },
      });

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res.data.msg,
        },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };
