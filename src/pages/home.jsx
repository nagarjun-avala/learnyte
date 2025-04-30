import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout/layout";
import Card from "../components/common/card";
import { getUserCourses } from "../redux/actions/courseAction";

const Home = () => {
  const { auth, courses } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(courses);

  useEffect(() => {
    dispatch(getUserCourses({ token: auth.token }));
  }, []);

  return (
    <Layout>
      <div className="container mt-3">
        <div className="text-center">
          <h1 className="mb-4">Hey {auth?.user?.fullname}!</h1>
          <h6>
            <p>
              You just finished the test and we think the following career best
              suits your motivations and core skills.
            </p>
            <p>Let us know if you need to try other than suggested TRACKS</p>
          </h6>
        </div>

        <div className="bg-body-tertiary rounded mb-4">
          <div className="row mx-3 justify-content-center">
            {courses?.loading ? (
              <h1 className="text-center">Loading...</h1>
            ) : courses?.results === 0 ? (
              <div className="m-5 p-5">
                <h1 className="text-center">No Courses available</h1>
                {/* <p>Please again take</p>
                <Link to="/question">Test</Link> */}
              </div>
            ) : (
              courses?.data?.map((course, index) => {
                return (
                  <Card
                    key={index}
                    link={"/course"}
                    course={course}
                    Class="up"
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
