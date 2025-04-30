import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopicCard from "../../components/common/topicCard";
import { changeTopic } from "../../redux/actions/daysAction";

const SideBar = ({ day, activeTopic }) => {
  const dispatch = useDispatch();

  const onClickTopic = (index) => {
    dispatch(changeTopic({ topics: day?.topics, index }));
  };

  return (
    <>
      <div className="header-box"></div>
      <h3 className="text-center p-3 ">Day {day?.day}/7</h3>

      <div className="container">
        {day?.topics?.map((topic, index) => {
          return (
            <TopicCard
              key={index}
              topic={topic}
              index={index}
              activeTopic={activeTopic}
              onClickTopic={onClickTopic}
            />
          );
        })}
        <div className="position-relative mt-4">
          {day?.day > 1 && (
            <button className="position-absolute top-50 start-0 btn btn-primary">
              &lt;-&nbsp; Day {day?.day - 1}
            </button>
          )}
          <button className="position-absolute disabled top-50 end-50 btn btn-primary">
            {day?.day}
          </button>
          {day?.day < 7 && (
            <button className="position-absolute top-50 end-0 btn btn-primary">
              Day {day?.day + 1} &nbsp;-&gt;
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
