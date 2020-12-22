import React from "react";
import { Card, Col } from "reactstrap";
import "./ResumeItem.css";

const ResumeItem = ({
  title,
  gender,
  avatar,
  location,
  age,
  id,
  error,
  loading,
  history,
}) => {
  return (
    <Col xs={6} md={3} onClick={() => history.push("resume-details/" + id)}>
      <Card>
        <Card className="mx-0 px-0">
          <div className="resume">
            <div className="resume-item-photo">
              <img
                src={avatar}
                alt="resume-item"
                className="resume-item w-100"
              />
            </div>
            <span className="resume-title ml-2">{title}</span>
            <div className="mb-2 resume-desc">
              <p className="ml-2">
                Пол: {gender === "M" ? "Мужской" : "Женский"}
              </p>
              <p className="ml-2">{age}</p>
              <p className="ml-2">{location}</p>
            </div>
          </div>
        </Card>
      </Card>
    </Col>
  );
};

export default ResumeItem;
