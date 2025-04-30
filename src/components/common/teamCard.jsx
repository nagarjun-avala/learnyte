import React from "react";
import { Link } from "react-router-dom";

const TeamCard = (props) => {
  return (
    <div className="about card text-center shadow">
      <div className="overflow">
        <img className="card-img-top" src={props.imgSrc} alt={props.title} />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.desc}</p>
        <Link to={"#"} className="btn btn-outline-success">
          Go Anywhere
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
