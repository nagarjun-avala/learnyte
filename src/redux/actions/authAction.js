import { GLOBALTYPES } from "./globalTypes";
import { patchDataAPI, postDataAPI } from "../../utils/fetchData";
import valid from "../../utils/valid";

export const login = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI("auth/login", data);

    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res?.data?.access_token,
        user: res?.data?.user,
      },
    });

    localStorage.setItem("login", true);
    localStorage.setItem("firstLogin", res?.data?.user.firstLogin);

    localStorage.setItem("googleLogin", false);
    localStorage.setItem("refreshtoken", res?.data?.refresh_token);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res?.data?.msg,
      },
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
//  working good
export const loginGoogle = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI("auth/loginGoogle", data);

    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });

    localStorage.setItem("login", true);

    localStorage.setItem("googleLogin", true);
    localStorage.setItem("refreshtoken", res.data.refresh_token);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err?.response?.data?.msg,
      },
    });
  }
};

export const refreshToken =
  ({ token }) =>
  async (dispatch) => {
    const login = localStorage.getItem("login");
    const refreshtoken = localStorage.getItem("refreshtoken");

    if (login) {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      try {
        const res = await postDataAPI("auth/refresh_token", { refreshtoken });

        dispatch({
          type: GLOBALTYPES.AUTH,
          payload: {
            token: res.data.access_token,
            user: res.data.user,
          },
        });

        dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      } catch (err) {
        localStorage.removeItem("login");
        localStorage.removeItem("refreshtoken");
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: {
            error: err?.response?.data?.msg,
          },
        });
      }
    }
  };

export const register = (data) => async (dispatch) => {
  const check = valid(data);
  if (check.errLength > 0)
    return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });

  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI("register", data);

    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });

    localStorage.setItem("login", true);

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

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("login");
    localStorage.removeItem("refreshtoken");
    localStorage.clear();
    await postDataAPI("auth/logout");
    window.location.href = "/login";
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const updateUserDetails =
  ({ data, auth, isWhatsapp }) =>
  async (dispatch) => {
    const check = validateUserDetails({ ...data, isWhatsapp });
    if (check.errLength > 0)
      return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });

    if (isWhatsapp) {
      data = { ...data, whatsappMobile: data.mobile };
    }

    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await patchDataAPI("auth/userDetails", data, auth.token);

      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          token: auth.token,
          user: res?.data?.user,
        },
      });

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res?.data?.msg,
        },
      });
      window.location.href = "/";
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err?.response?.data?.msg,
        },
      });
    }
  };

const validateUserDetails = ({
  collage,
  department,
  year,
  city,
  mobile,
  whatsappMobile,
  isWhatsapp,
}) => {
  const err = {};

  if (!collage) {
    err.collage = "Please add your Collage.";
  }

  if (!department) {
    err.department = "Please add your Department";
  }
  if (!year) {
    err.year = "Please add your Year of Degree";
  }
  if (!city) {
    err.city = "Please add your City";
  }
  if (!mobile) {
    err.mobile = "Please add your Mobile";
  } else if (mobile.length !== 10) {
    err.mobile = "Invalid Phone number";
  }
  if (!isWhatsapp) {
    if (!whatsappMobile) {
      err.whatsappMobile = "Please add your Whatsapp Number";
    } else if (whatsappMobile && whatsappMobile.length !== 10) {
      err.whatsappMobile = `Invalid Whatsapp Phone number ${whatsappMobile}`;
    }
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};
