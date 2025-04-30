import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/Layout/layout";
import Card from "../components/common/card";
import { getSearchedCourse } from "../redux/actions/courseAction";

const Search = () => {
  const { auth, courses } = useSelector((state) => state);
  const dispatch = useDispatch();

  const params = useParams();

  const [search, setSearch] = useState("");

  const submitSearch = () => {
    dispatch(getSearchedCourse({ search, token: auth.token }));
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h2 className="mb-3 mt-5">Search : {search}</h2>
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            value={search}
            placeholder="Search......"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={() => submitSearch()}
          >
            Search
          </button>
        </div>

        <br />
        <hr />
        <br />

        <div className="bg-body-tertiary rounded mb-4">
          <div className="row mx-3">
            {courses?.loading ? (
              <h1 className="text-center">Loading...</h1>
            ) : courses?.results === 0 ? (
              <div className="m-5 p-5">
                <h1 className="text-center">No Courses available</h1>
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

export default Search;
