import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllQuestions,
  questionSubmit,
} from "../../redux/actions/questionAction";
import QuestionFormScreen from "../../components/common/question/questionFormScreen";

const Question = () => {
  const { question: questions, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState([]);

  useEffect(() => {
    dispatch(getAllQuestions({ auth }));
  }, []);

  const next = (data) => {
    console.log("Next Called");
    setMarkedAnswers([...markedAnswers, data]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (
      markedAnswers?.length !== 0 &&
      markedAnswers?.length === questions?.data?.length
    ) {
      onSave();
    }
  }, [markedAnswers]);

  const onSave = () => {
    dispatch(questionSubmit({ data: markedAnswers, token: auth?.token }));
  };

  return (
    <>
      {questions?.loading === true ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {currentQuestionIndex < questions.data.length && (
            <div
              className="quiz-screen border rounded"
              style={{ minHeight: "40vh" }}
            >
              <QuestionFormScreen
                data={questions?.data[currentQuestionIndex]}
                onNext={next}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Question;
