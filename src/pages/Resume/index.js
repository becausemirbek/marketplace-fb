import React from "react";
import ResumeForm from "../../components/ResumeForm";

const Resume = (props) => {
  return (
    <div>
      <ResumeForm history={props.history} />
    </div>
  );
};

export default Resume;
