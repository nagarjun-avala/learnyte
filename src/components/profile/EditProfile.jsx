import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileUser } from "../../redux/actions/profileAction";

const EditProfile = ({ setOnEdit }) => {
  const initState = {
    fullname: "",
    given_name: "",
    family_name: "",
    gender: "",
    password: "",
  };
  const [userData, setUserData] = useState(initState);
  const { fullname, given_name, family_name, gender, password } = userData;

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(auth.user);
  }, [auth.user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileUser({ userData, auth }));
  };

  return (
    <div className="edit_profile">
      <button
        className="btn btn_close btn-danger"
        onClick={() => setOnEdit(false)}
      >
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <div className="info_avatar">
          <img src={auth.user.picture} alt="avatar" />
        </div>
        <p className="text-center">{fullname}</p>

        <div className="mb-3">
          <label className="pb-1" htmlFor="given_name">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="given_name"
            name="given_name"
            value={given_name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="pb-1" htmlFor="family_name">
            Family Name
          </label>
          <input
            type="text"
            className="form-control"
            id="family_name"
            name="family_name"
            value={family_name}
            onChange={handleInput}
          />
        </div>

        <div className="input-group-prepend px-0 mb-4">
          <label className="pb-1" htmlFor="gender">
            Gender
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            value={gender}
            onChange={handleInput}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="pb-1" htmlFor="password">
            Password
          </label>
          <input
            disabled={auth?.user?.password}
            type="text"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
        </div>

        <button className="btn btn-info w-100" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
