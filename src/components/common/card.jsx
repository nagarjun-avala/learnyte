import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Class = "", link, course }) => {
  return (
    <div className="col-lg-4 col-sm-12 my-4 d-flex align-items-center justify-content-center">
      <div
        className={`card h-100 w-100 ${Class}`}
        style={{ background: "#fff !important" }}
      >
        <img
          src={
            course?.picture !== ""
              ? course?.picture
              : "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
          }
          className="card-img-top"
          alt={course.name}
        />

        <div className="card-body">
          <h5 className="card-title text-bold">
            <Link to={`../course/${course?._id}`} style={{ cursor: "pointer" }}>
              {course.name}
            </Link>
          </h5>
          <p className="card-text mt-1" style={{ fontsize: "0.8rem" }}>
            {course.description.substring(0, 150)}...
            <Link to={`../course/${course?._id}`} style={{ color: "crimson" }}>
              more
            </Link>
          </p>
          {/* <p>Type : {course.type}</p> */}
          {/* <p>Views : {course.views}</p> */}

          <div className="row">
            <div className="col-9">
              <Link
                to={`${course?.embed_link}`}
                target="_blank"
                className="btn btn-primary"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
