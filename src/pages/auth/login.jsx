import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Layout from "./../../components/Layout/layout";
import { login, loginGoogle } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    auth?.token &&
      (auth?.user.score === 0 ||
      auth?.user?.collage === "" ||
      auth?.user?.department === "" ||
      auth?.user?.year === 0 ||
      auth?.user?.city === "" ||
      auth?.user?.mobile === "" ||
      auth?.user?.whatsappMobile === ""
        ? navigate("/")
        : navigate("/home"));
  }, [auth?.token]);

  const handleGoogleLogin = async (data) => {
    dispatch(loginGoogle(data));
  };

  return (
    <Layout title={"Learnyte | Login"}>
      <div className="form-container">
        <div className="form">
          <h1 className="title text-center mb-4">Log In</h1>
          <div className="text-center my-3 d-flex justify-content-center">
            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
