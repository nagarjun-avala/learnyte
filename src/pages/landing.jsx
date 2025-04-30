import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Layout from "../components/Layout/layout";
import Card from "../components/common/card";
import { getUserCourses } from "../redux/actions/courseAction";

const Landing = () => {
  return (
    <Layout title="Welcome to Learnyte 📚">
      <div className="container my-3">
        <div className="text-center my-3">
          <h1 className="mb-4">
            {" "}
            <u>We are learnyte</u>{" "}
          </h1>
          <p>WE let you experience different careers</p>
          <Link to="/login" style={{ color: "crimson" }}>
            <button type="submit" className="btn btn-primary">
              I'm in
            </button>
          </Link>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-6 my-2  text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 my-2 text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
        </div>

        <hr />

        <div className="text-center my-3">
          <h4 className="mb-4">This is not another course</h4>
          <p>WE are explorers</p>
          <div className="text-center my-5">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"30%"}
            />
          </div>
          <h5>
            <p>
              Do you believe exploring different careers is important before
              choosing one ?
            </p>
          </h5>
          <div className="d-flex justify-content-center align-items-center text-center my-4 ">
            <h6 className="quote text-light text-bold w-50 border p-4 rounded bg-secondary">
              <q style={{ fontFamily: "cursive" }}>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                ipsam a dolores assumenda debitis, labore dolore non et
                blanditiis totam fuga accusamus repellat ipsum sint, unde ea
                eius aspernatur numquam?{" "}
              </q>
            </h6>
          </div>
          <Link to="/login" style={{ color: "crimson" }}>
            <button type="submit" className="btn btn-primary">
              I'm in
            </button>
          </Link>
        </div>
        <hr />
        <div className="mt-4 text-center">
          <h1 className="mb-4">
            How to find and focus on what you're passionate about in 8 hrs ?
          </h1>
          <p>
            Ever felt like you really don't know what you're doing and where
            you're heading and as a student you really don't know what to do
            about ?
          </p>
          <p>
            You go to collage, meet friends listen to boring lectures and come
            home sleep and wake up and then this goes on and on... never
            ending...
          </p>
          <h2 className="my-5">
            I know exactly how you feel....because i've been there myself _ _ _
            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          </h2>
          <h1 className="my-5">
            Because the REAL PROBLEM i had was a lack mentoring
          </h1>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-6 my-2  text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 my-2 text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
        </div>
        <div className="text-bold">
          <hr />
          <p>What is Learnyte ?</p>
          <hr />
          <p>Benefits ?</p>
          <hr />
        </div>

        <div className="text-center">
          <Link to="/login" style={{ color: "crimson" }}>
            <button type="submit" className="btn btn-primary">
              I'm in
            </button>
          </Link>
        </div>
        <hr />
        <div className="my-5">
          <h1 className="mb-4">Over a 200 students Use Learnyte</h1>
          <p>They got clarity</p>
          <p>They got confidence</p>
          <p>They got focus</p>
          <p>They got support</p>
          <p>
            They are happy <span>&#128540;</span>
          </p>
        </div>
        <hr />
        <div className="text-center">
          <h1 className="mb-4 text-capitalize">
            REAL PEOPLE ARE GETTING GUIDANCE
          </h1>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-6 my-2  text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 my-2 text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
        </div>
        <div className="text-center my-5">
          <Link to="/login" style={{ color: "crimson" }}>
            <button type="submit" className="btn btn-primary">
              I'm in
            </button>
          </Link>
        </div>
        <hr />
        <h3 className="my-3">Q&A:</h3>
        <div className="text-center">
          <i>
            <h1>I'm not in yet... I'm still not sure because:</h1>
          </i>
        </div>
        <div className="">
          <h2>
            <span className="text-danger"> &#63; </span>{" "}
            <span className="p-2">I'll start when i am ready</span>
          </h2>
          <p>That my friend is your entire problem in life</p>
          <p>More reasons to Explore</p>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-6 my-2  text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 my-2 text-center">
            <img
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
              className="img"
              alt="Learnyte"
              width={"60%"}
            />
          </div>
        </div>
        <div className="text-center ">
          <Link to="/login" style={{ color: "crimson" }}>
            <button type="submit" className="btn btn-primary">
              I'm in
            </button>
          </Link>
        </div>
        <hr className="mb-5" />
      </div>
    </Layout>
  );
};

export default Landing;
