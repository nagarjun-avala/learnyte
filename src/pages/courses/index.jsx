import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserSingleCourse,
  getUserCourses,
} from "../../redux/actions/courseAction";

const Course = () => {
  const params = useParams();
  const { auth, userCourses } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserSingleCourse(params.id, auth));
  }, []);

  return (
    <Layout title={"Learnyte | Course DESC"}>
      <div className="container my-5">
        {userCourses?.loading ? (
          "Loading"
        ) : (
          <>
            <h3 className="text-center p-3">{userCourses?.courses[0]?.name}</h3>
            <div className="d-flex flex-column border rounded">
              <h6 className="text-center">
                {userCourses?.courses[0]?.picture}
              </h6>
              <div className="col">
                <h6 className="text-center">Course Header</h6>
              </div>
              <div className="col">
                <h6 className="text-center">
                  {userCourses?.courses[0]?.description}
                </h6>
              </div>
              <div className="col p-3">
                <a
                  href={`/course/topics/${userCourses?.courses[0]?._id}`}
                  className="btn btn-primary"
                >
                  Enroll
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Course;
