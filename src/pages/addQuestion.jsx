import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/layout";
import {
  AllQuestionsId,
  AddNewQuestion,
} from "../redux/actions/questionAction";

const AddQuestion = () => {
  const { auth, question } = useSelector((state) => state);
  const dispatch = useDispatch();
  const init = {
    parentQuestion: "",
    question: "",
    options: "",
    tags: "",
    isEnd: false,
  };
  const [newQuestion, setNewQuestion] = useState(init);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };
  const handleChangeCheck = (e) => {
    let isChecked = e.target.checked;
    setNewQuestion({ ...newQuestion, isEnd: isChecked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(AddNewQuestion(newQuestion));
  };

  useEffect(() => {
    dispatch(AllQuestionsId());
  }, []);

  return (
    <Layout title={"Admin | Add Add"}>
      <div className="container mt-4">
        <h1 className="text-center">Add Question</h1>
        <form>
          <div className="row mb-3">
            <label htmlFor="parentQuestion" className="col-sm-2 col-form-label">
              Parent ID
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="parentQuestion"
                name="parentQuestion"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="question" className="col-sm-2 col-form-label">
              Question
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="question"
                name="question"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="options" className="col-sm-2 col-form-label">
              Options
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="options"
                name="options"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tags" className="col-sm-2 col-form-label">
              Tags
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tags"
                name="tags"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="isEnd"
              className="col-sm-2 col-form-label form-check-label"
            >
              is End ?
            </label>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isEnd"
                  name="isEnd"
                  onChange={handleChangeCheck}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>

        <div className="row">
          <h2 className="text-center">Existing Questions</h2>
          <div className="container mb-3">
            {question?.loading ? (
              "Loading..."
            ) : (
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Question</th>
                      <th scope="col">ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {question?.data?.map((q, index) => {
                      return (
                        <tr key={q._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{q.question}</td>
                          <td>{q._id}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddQuestion;
