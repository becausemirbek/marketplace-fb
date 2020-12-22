import React, { Component } from "react";
import { connect } from "react-redux";

import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import {
  Label,
  FormFeedback,
  FormText,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { createEducationInfo } from "../../redux/actions";
import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback";
import AvField from "availity-reactstrap-validation/lib/AvField";
import "./ResumeForm.css";

class InfoForm extends Component {
  handleValidSubmit = (e, values) => {
    values.degree = +values.degree;
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    localStorage.setItem("userInfo", JSON.stringify(values));
    // this.props.createEducationInfo(formData);
  };
  render() {
    const { handleClose, handleSubmit } = this.props;
    return (
      <AvForm onValidSubmit={this.handleValidSubmit}>
        <AvGroup>
          <Label for="exampleEmail">Учебное заведение</Label>
          <AvInput id="exampleEmail" name="institution" />
          <FormFeedback></FormFeedback>
          <FormText></FormText>
        </AvGroup>
        <AvGroup>
          <InputGroup>
            <InputGroupAddon
              style={{ lineHeight: "!important" }}
              addonType="prepend"
            ></InputGroupAddon>
            <AvField type="select" id="pool-select" name="degree" required>
              <option>---------</option>

              <option value="1">Secondary</option>

              <option value="2">Vocational secondary</option>

              <option value="3">Incomplete higher</option>

              <option value="4">Higher</option>

              <option value="5">Bachelor</option>

              <option value="6">Master</option>

              <option value="7">Candidate of Sciences</option>

              <option value="8">Doctor of Sciences</option>
            </AvField>
            <AvFeedback>Select a pool to install in</AvFeedback>
          </InputGroup>
        </AvGroup>
        <AvGroup></AvGroup>
        <AvGroup>
          <label htmlFor="start">Start date:</label>
          <AvInput type="date" id="start" name="start_date" />
        </AvGroup>
        <AvGroup>
          <Label htmlFor="exampleNumber">Дата окончания</Label>
          <AvInput type="date" name="end_date" id="exampleNumber" />
        </AvGroup>
        <Button type="submit" onClick={handleSubmit}>
          Сохранить
        </Button>
        <Button type="reset" onClick={handleClose}>
          Отмена
        </Button>
      </AvForm>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, loading } = state.Category;
  return { error, loading };
};

export default connect(mapStateToProps, { createEducationInfo })(InfoForm);
