import React from "react";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  // AvRadioGroup,
  // AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, Label, FormGroup, Card, Col, Row } from "reactstrap";
import "./FilterForm.css";

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.state = {};
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ errors, values });
  }

  render() {
    return (
      <Card className="p-2 col-9">
        <Col>
          <Row className="justify-content-between d-md-flex d-none">
            <AvForm onInvalidSubmit={this.handleInvalidSubmit}>
              <Row className="mx-0 align-items-center">
                <AvGroup inline className="d-flex mr-5">
                  <Label className="mt-2 mr-2">Цена</Label>
                  <AvInput
                    name="rank"
                    id="example"
                    required
                    placeholder="от"
                    className="increment-inp"
                  />
                  <AvInput
                    name="rank"
                    id="example"
                    required
                    placeholder="до"
                    className="increment-inp"
                  />
                  <AvFeedback>This is an error!</AvFeedback>
                </AvGroup>
                <AvCheckboxGroup
                  className="ml-5"
                  inline
                  name="checkboxExample3"
                >
                  <AvCheckbox label="Купить" value="Купить" />
                  <AvCheckbox label="Снять" value="Снять" />
                  <AvCheckbox label="Все" value="Все" />
                </AvCheckboxGroup>
              </Row>
              <Row className="mx-0 align-items-center">
                <AvField
                  type="select"
                  name="select"
                  label="Все объявления категории"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </AvField>
                <FormGroup className="submit-btn">
                  <Button color="info" className="btn-submit">
                    Применить
                  </Button>
                </FormGroup>
              </Row>
            </AvForm>
            {this.state.values && (
              <div>
                <h5>Submission values</h5>
                Invalid: {this.state.errors.join(", ")}
                <br />
                Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
              </div>
            )}
          </Row>
        </Col>
      </Card>
    );
  }
}
