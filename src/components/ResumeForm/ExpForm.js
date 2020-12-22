import React, { Component } from "react";
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import { Label, FormFeedback, FormText, Button } from "reactstrap";

export default class ExpForm extends Component {
  handleValidSubmit = (e, values) => {
    console.log(values);
    localStorage.setItem("userExp", JSON.stringify(values));
  };
  render() {
    const { handleClose, handleSubmit } = this.props;
    return (
      <AvForm onValidSubmit={this.handleValidSubmit}>
        <AvGroup>
          <Label for="exampleEmail">Заголовок</Label>
          <AvInput id="exampleEmail" name="title" />
          <FormFeedback></FormFeedback>
          <FormText></FormText>
        </AvGroup>
        <AvGroup>
          <Label for="exampleNumber">Дата начала</Label>
          <AvInput type="text" name="start_date" id="exampleNumber" />
        </AvGroup>
        <AvGroup>
          <Label for="exampleNumber">Дата окончания</Label>
          <AvInput type="text" name="end_date" id="exampleNumber" />
        </AvGroup>
        <AvGroup>
          <Label for="exampleText">Должность</Label>
          <AvInput name="position" type="text" id="exampleText" />
        </AvGroup>
        <AvGroup>
          <Label for="exampleText">Адрес</Label>
          <AvInput name="location" type="text" id="exampleText" />
        </AvGroup>
        <AvGroup>
          <Label for="exampleText">Обязанность</Label>
          <AvInput name="job_responsibilities" type="text" id="exampleText" />
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
