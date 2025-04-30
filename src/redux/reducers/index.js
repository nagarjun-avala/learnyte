import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import modal from "./modalReducer";
import status from "./statusReducer";
import question from "./questionReducer";
import profile from "./profileReducer";
import notification from "./notifyReducer";
import courses from "./courseReducer";

export default combineReducers({
  auth,
  question,
  courses,
  profile,
  notification,
  alert,
  status,
  modal,
});
