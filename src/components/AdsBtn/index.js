import React from "react";
import { Button } from "reactstrap";

import "./AdsBtn.css";

const AdsBtn = ({ history }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="rel">
        <Button
          onClick={() => history.push("/announcement")}
          color="info"
          className="adBtn d-lg-none d-flex"
        >
          Опубликовать Объявление
        </Button>
      </div>
    </div>
  );
};

export default AdsBtn;
