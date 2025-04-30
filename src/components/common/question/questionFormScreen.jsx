import React, { useState } from "react";
import "./questionFormScreen.css";

const QuestionFormScreen = ({ data, onNext }) => {
    const [selectedOption, setSelectedOption] = useState({});

    return (
        <div className="question">
            <div className="main">
                <div className="title">
                    <span>Question:</span>
                    <p>{data?.question}</p>
                </div>
                <div className="options">
                    {data?.options?.map((op) => {
                        return (
                            <div
                                className={`option ${selectedOption.answer_id === op._id ? "active" : ""
                                    }`}
                                key={op._id}
                                onClick={() =>
                                    setSelectedOption({
                                        question_id: data?._id,
                                        answer_id: op._id,
                                        score: op.score,
                                    })
                                }
                            >
                                {op?.option}
                            </div>
                        );
                    })}
                </div>

                <div className="control d-flex justify-content-lg-end justify-content-sm-center justify-content-center mt-4">
                    {data?.isEnd ? (
                        <button
                            className="btn btn-primary"
                            disabled={!selectedOption.question_id === data?._id ? true : false}
                            onClick={() => {
                                onNext(selectedOption)
                                // onSubmit()
                            }}
                        >
                            Submit Answers
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            disabled={!selectedOption?.question_id ? true : false}
                            onClick={() => {
                                onNext(selectedOption)
                                setSelectedOption({})
                            }}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionFormScreen;
