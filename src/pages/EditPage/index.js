import React, { Component } from "react";
import {
  Label,
  FormFeedback,
  FormText,
  Container,
  Row,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { getAdsDetails, updatePost, deletePost } from "../../redux/actions";

import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import { getLoggedInUser } from "../../helpers/authUtils";
import { Cascader } from "antd";
import "antd/dist/antd.css";

class PostForm extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getAdsDetails(this.props.match.params.id);
  }
  constructor(props) {
    super(props);
    const user = getLoggedInUser();
    // console.log(user)
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.state = {
      pass_images: [],
      category: null,
    };
  }

  handleFileDrop = (e) => {
    const pass_images = [...this.state.pass_images, ...e.target.files];
    this.setState({ pass_images });
  };

  deleteFile = (i) => {
    const pass_images = [...this.state.pass_images];
    pass_images.splice(i, 1);
    this.setState({ pass_images });
  };

  // handleValidSubmit = (e, values) => {
  //   // this.props.createPost({values, images: this.fileInput})
  //   console.log({ ...values});
  //   // this.props.history.push('/post-create-success')
  // };

  handleValidSubmit = (event, values) => {
    delete values.pass_images;
    let formData = new FormData();
    this.state.pass_images.forEach((item) => {
      formData.append("images", item);
    });
    for (const key in values) {
      formData.append(key, values[key]);
    }
    if (this.state.category)
      formData.append("category", this.state.category.id);
    this.props.updatePost({ data: formData, id: this.props.match.params.id });
    // this.props.history.push('/post-create-success')
  };
  render() {
    const convertCatToOpt = (data) =>
      data.map((item) => ({
        label: item.title,
        value: item,
        children: convertCatToOpt(item.children),
      }));
    const options = convertCatToOpt(this.props.data);
    const del = (id) => this.props.deletePost(id);
    return (
      <Container>
        <Row className="mb-5">
          <AvForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup>
              <Label for="exampleEmail">Название товара</Label>
              <AvInput id="exampleEmail" name="title" />
              <FormFeedback></FormFeedback>
              <FormText></FormText>
            </AvGroup>
            {/* <AvGroup>
              <Label for="exampleText">Описание товара</Label>
              <AvInput name="description" type="textarea" id="exampleText" />
            </AvGroup>
            <AvGroup>
              <Cascader
                onChange={(item) => this.setState({ category: item[0] })}>
                <Button
                  className="mb-3"
                  style={{ boxShadow: "none" }}>
                  {this.state.category?.title || "Category"}
                </Button>
              </Cascader>
            </AvGroup>
            <AvGroup>
              <Label for="exampleNumber">Цена</Label>
              <AvInput
                type="number"
                name="price"
                id="exampleNumber"
                placeholder="стоимость товара"
              />
            </AvGroup>
            <AvGroup>
              <Label for="phone_number">Номер Телефона</Label>
              <AvInput 
                name="phone_number" 
                type="number" 
                id="phone_number" 
                placeholder="Номер телефона"/>
            </AvGroup>
            <AvGroup>
              <Label for="pass_images">Добавить картинку</Label>
              <AvInput
                onChange={this.handleFileDrop}
                type="file"
                name="pass_images"
                id="pass_images"
                multiple
              />
              <FormText color="muted"></FormText>
            </AvGroup> */}
            <Button type="submit" color="info">
              Опубликовать
            </Button>
            <Button
              type="button"
              onClick={() => {
                del(this.props.ads.id);
                this.props.history.push("/");
              }}
              className="ml-2"
              color="danger"
            >
              Удалить
            </Button>
          </AvForm>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error, ads, data } = state.Category;
  return { loading, error, ads, data };
};

export default connect(mapStateToProps, {
  updatePost,
  getAdsDetails,
  deletePost,
})(PostForm);
