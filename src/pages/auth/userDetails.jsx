import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./../../components/Layout/layout";
import { updateUserDetails } from "../../redux/actions/authAction";

import stateCapitalList from '../../assets/state_capitals.json'

const UserDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (auth?.token) {
      navigate("/");
    }
  }, []);

  const { auth, alert } = useSelector((state) => state);
  const [userData, setUserData] = useState({
    collage: auth?.user?.collage,
    department: auth?.user?.department,
    year: auth?.user?.year,
    city: auth?.user?.city,
    mobile: auth?.user?.mobile,
    whatsappMobile: auth?.user?.whatsappMobile,
  });

  const [isWhatsapp, setIsWhatsapp] = useState(false)

  const { collage, department, year, city, mobile, whatsappMobile } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleChangeCheckBox = () => {
    setIsWhatsapp(!isWhatsapp)
    !isWhatsapp ? setUserData({ ...userData, whatsappMobile: userData.mobile }) : setUserData({ ...userData, whatsappMobile: "" })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserDetails({ data: userData, auth, isWhatsapp }))
  };


  return (
    <Layout title={"Register"}>
      <div className="form-container mt-0">
        <p className="mb-4 mt00 text-warning">!Thank you <b>{auth?.user?.fullname}</b> for logging in. please fill these details </p>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1 className="title my-2">Details</h1>

            {/* Collage Name */}
            <div className="mb-3 form-input">
              <label htmlFor="collage" className="form-label">
                University / College
              </label>
              <input
                type="text"
                className="form-control"
                id="collage"
                onChange={handleChangeInput}
                value={collage}
                name="collage"
                style={{ background: `${alert.collage ? "#fd2d6a14" : ""}` }}
              />
              <small className="form-text text-danger">
                {alert.collage ? alert.collage : ""}
              </small>
            </div>

            {/* Department */}
            <div className="mb-3 form-input">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                onChange={handleChangeInput}
                value={department.toUpperCase().replace(/ /g, "")}
                name="department"
                style={{ background: `${alert?.department ? "#fd2d6a14" : ""}` }}
              />
              <small className="form-text text-danger">
                {alert?.department ? alert?.department : ""}
              </small>
            </div>

            {/* Year */}
            <div className="mb-3 form-input">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <select
                name="year"
                id="year"
                defaultValue={year}
                className="form-control"
                style={{
                  background: `${alert?.year ? "#fd2d6a14" : ""}`,
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                }}
                onChange={handleChangeInput}
              >
                <option value={0} disabled>-- Select Year --</option>
                <option value={1}>1st Year</option>
                <option value={2}>2nd Year</option>
                <option value={3}>3rd Year</option>
                <option value={4}>4th Year</option>
              </select>
              <small className="form-text text-danger">
                {alert?.year ? alert?.year : ""}
              </small>
            </div>

            {/* State Capitals */}
            <div className="mb-3 form-input">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                name="city"
                id="city"
                defaultValue={city}
                className="form-control"
                data-live-search="true"
                style={{
                  background: `${alert?.city ? "#fd2d6a14" : ""}`,
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                }}
                onChange={handleChangeInput}
              >
                <option value={""} disabled>-- Select city -- </option>
                <optgroup label="States">
                  {stateCapitalList.states.sort().map(state => {
                    return (<option key={state.key} data-tokens={state.val.toLocaleLowerCase()}>{state.key} - {state.val}</option>)
                  })}
                </optgroup>

                <optgroup label="Union Territories">
                  {stateCapitalList.unionTerritories.sort().map(unionTerritory => {
                    return (<option key={unionTerritory.key} value={unionTerritory.val.toLocaleLowerCase()}>{unionTerritory.key} - {unionTerritory.val}</option>)
                  })}
                </optgroup>
                <option value="other">Other</option>
              </select>
              <small className="form-text text-danger">
                {alert?.city ? alert?.city : ""}
              </small>
            </div>

            {/* MObile */}
            <div className="mb-3 form-input">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <span className="mx-4">
                <input
                  type="checkbox"
                  name="whatsappMobile"
                  id="whatsappMobile"
                  checked={isWhatsapp ? true : false}
                  onChange={() => handleChangeCheckBox()}

                />
                <label className="form-label mx-1" htmlFor="whatsappMobile">same for whatsapp No.</label>
              </span>
              <input
                type="text"
                className="form-control"
                id="mobile"
                onChange={handleChangeInput}
                value={mobile}
                name="mobile"
                style={{ background: `${alert?.mobile ? "#fd2d6a14" : ""}` }}
              />
              <small className="form-text text-danger">
                {alert?.mobile ? alert?.mobile : ""}
              </small>
            </div>
            {/* whatsapp Mobile */}
            {!isWhatsapp &&
              <div className="mb-3 form-input">
                <label htmlFor="whatsappMobile" className="form-label">
                  Whatsapp Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="whatsappMobile"
                  onChange={handleChangeInput}
                  value={whatsappMobile}
                  name="whatsappMobile"
                  style={{ background: `${alert?.whatsappMobile ? "#fd2d6a14" : ""}` }}
                />
                <small className="form-text text-danger">
                  {alert?.whatsappMobile ? alert?.whatsappMobile : ""}
                </small>
              </div>}


            <button type="submit" className="btn btn-dark w-100 mt-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
