import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout/layout";
import Question from "./question";
import QuestionRules from "./questionRules";

const Questions = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isFormOpened, setIsFormOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const changeDisplay = () => {
    setLoading(true);
    sleep(500).then(() => {
      // do something
      setLoading(false);
      setIsFormOpened(!isFormOpened);
    });
  };
  return (
    <Layout title={"Learnyte | Questions"}>
      <div className="container">
        <h1 className="text-center mt-4">Form</h1>
        <div className="d-flex justify-content-center align-items-center my-lg-4 my-md-4 my-3">
          {loading ? (
            <h5>Loading...</h5>
          ) : (
            <>
              {isFormOpened ? (
                <Question setFormOpen={changeDisplay} />
              ) : (
                <QuestionRules setFormOpen={changeDisplay} />
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Questions;
