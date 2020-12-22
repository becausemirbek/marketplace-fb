import React, { Component } from "react";

import { Container, Label, FormText, Button, FormFeedback } from "reactstrap";

import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { createResume } from "../../redux/actions";
import ResumeModal from "../ResumeForm/ResumeModal";
import ExpForm from "./ExpForm";
import InfoForm from "./InfoForm";
import * as Feather from "react-feather";
import AvField from "availity-reactstrap-validation/lib/AvField";
import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback";

class ResumeForm extends Component {
  constructor(props) {
    super(props);
    // const user = getLoggedInUser();
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.state = {
      pass_images: [],
      pass_resume: [],
    };
  }

  handleResumeDrop = (e) => {
    const pass_resume = e.target.files[0];
    this.setState({ pass_resume });
  };

  handleFileDrop = (e) => {
    const pass_images = [...this.state.pass_images, ...e.target.files];
    this.setState({ pass_images });
  };

  deleteFile = (i) => {
    const pass_images = [...this.state.pass_images];
    pass_images.splice(i, 1);
    this.setState({ pass_images });
  };

  handleValidSubmit = (event, values) => {
    delete values.resume;
    delete values.avatar;
    let formData = new FormData();
    this.state.pass_images.forEach((item) => {
      formData.append("avatar", item);
    });
    formData.append("file_resume", this.state.pass_resume);
    for (const key in values) {
      formData.append(key, values[key]);
    }
    console.log(Array.from(formData.entries()));
    // if (this.state.category)
    //   formData.append("category", this.state.category.id);
    // formData.append("metro", this.state.metro);
    // formData.append("city", this.state.city);
    // // for (var key of formData.keys()) {
    // // }
    this.props.createResume(formData);
    console.log(formData);
    // this.props.history.push("/post-create-success");
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <AvForm onValidSubmit={this.handleValidSubmit}>
          <AvGroup>
            <Label for="exampleEmail">Ваше имя</Label>
            <AvInput id="exampleEmail" name="title" />
            <FormFeedback></FormFeedback>
            <FormText></FormText>
          </AvGroup>
          <AvGroup>
            <Label
              for="avatar"
              className="d-flex justify-content-center pt-5 pb-5 inp-addFile flex-column border"
              onDrop={(event) => this.dropHandler(event)}
              onDragOver={(event) => this.dragOverHandler(event)}
            >
              <div className="center d-flex justify-content-center">
                <p>
                  <Feather.Camera />
                </p>
              </div>
              <p className="text-center">Добавить фото</p>
              <AvInput
                onChange={this.handleFileDrop}
                style={{ opacity: "0" }}
                type="file"
                name="avatar"
                id="avatar"
                multiple
              />
            </Label>
          </AvGroup>
          <AvGroup>
            <Label for="exampleText">Введите email</Label>
            <AvInput name="email" type="email" id="exampleText" />
          </AvGroup>
          <AvGroup>
            <Label
              for="resume"
              className="d-flex justify-content-center pt-5 pb-5 inp-addFile flex-column border"
              onDrop={(event) => this.dropHandler(event)}
              onDragOver={(event) => this.dragOverHandler(event)}
            >
              <div className="center d-flex justify-content-center">
                <p>
                  <Feather.File />
                </p>
              </div>
              <p className="text-center">Добавить Резюме</p>
              <AvInput
                onChange={this.handleResumeDrop}
                style={{ opacity: "0" }}
                type="file"
                name="resume"
                id="resume"
                multiple
              />
            </Label>
          </AvGroup>
          <AvGroup></AvGroup>
          {/* <AvGroup>
            <Label for="exampleNumber">Пол</Label>
            <AvInput
              type="text"
              name="gender"
              id="exampleNumber"
              placeholder="Пол"
            />
          </AvGroup> */}
          <AvGroup>
            {/* <InputGroup>
            <InputGroupAddon
              style={{ lineHeight: "!important" }}
              addonType="prepend"
            ></InputGroupAddon> */}
            <AvField type="select" id="pool-select" name="gender" required>
              <option>--Пол--</option>
              <option value="M">Мужской</option>
              <option value="F">Женский</option>
            </AvField>
            <AvFeedback>Select a pool to install in</AvFeedback>
            {/* </InputGroup> */}
          </AvGroup>
          <AvGroup>
            <Label for="exampleNumber">Возраст</Label>
            <AvInput
              type="text"
              name="age"
              id="exampleNumber"
              placeholder="Возраст"
            />
          </AvGroup>
          <AvGroup>
            <Label for="exampleNumber">Расположение</Label>
            <AvInput
              type="text"
              name="location"
              id="exampleNumber"
              placeholder="Расположение"
            />
          </AvGroup>

          <ResumeModal
            buttonLabel="Добавить дополнительную информацию"
            color="link"
            titleText="Образование"
            body={InfoForm}
          />

          <ResumeModal
            buttonLabel="Опыт работы"
            color="link"
            titleText="Опыт"
            body={ExpForm}
          />

          <Button type="submit" color="info">
            Опубликовать
          </Button>
        </AvForm>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error } = state.Category;
  return { loading, error };
};

export default connect(mapStateToProps, { createResume })(ResumeForm);
