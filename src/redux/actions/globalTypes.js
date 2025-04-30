export const GLOBALTYPES = {
  AUTH: "AUTH",
  QUESTION_SUBMITTED: "QUESTION_SUBMITTED",
  FIRST_LOGIN: "FIRST_LOGIN",
  ALERT: "ALERT",
  MODAL: "MODAL",
};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
