import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/layout";
import SideBar from "./sideBar";
import { getAllDays, changeTopic } from "../../redux/actions/daysAction";


const Topics = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const { auth, days } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDays({ course_id: params.id, token: auth.token }));
  }, [dispatch]);


  return (
    <Layout title={"Learnyte | Course name"}>
      <div className="row my-5">
        <div className="col">
          {days?.loading ? (
            <div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="loader" />
            </div>
          ) : (
            <>
              {/* <div className="container bg-body-tertiary rounded p-2 px-1 mb-3">
                <h2 className="text"> - {days?.topic?.name?.toUpperCase()}</h2>
              </div> */}
              <div className="container">
                <iframe src={"https://form.typeform.com/to/wOfZ9nrO"}
                  style={{ width: "100%", height: "100vh", border: 0, padding: 0 }}
                  allowFullScreen
                  frameBorder={0}
                  title="example"
                  scrolling="no"
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout >
  );
};

export default Topics;
