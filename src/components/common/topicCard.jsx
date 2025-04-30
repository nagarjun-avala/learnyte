import React from "react";

const TopicCard = ({ activeTopic, topic, onClickTopic, index }) => {
  return (
    <div
      className="card my-2 my-3 ml-0 ml-lg-1"
      style={{
        width: "100%",
        cursor: "pointer",
        height: "60px",
        background: "#e0e0e0",
        boxShadow: "7px 7px 14px #d5d5d5,-7px -7px 14px #ebebeb",
        marginLeft: "10px",
      }}
      onClick={() => onClickTopic(index)}
    >
      <div
        className={`card-body rounded  ${
          topic?._id === activeTopic && "bg-body-secondary text-bold"
        }`}
      >
        <div className="row">
          <div className="col-10 text-truncate text-start ">
            {topic?.menuName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
