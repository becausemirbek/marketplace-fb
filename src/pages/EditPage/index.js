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
import { getAdsDetails, updatePost, deletePost, getCategory, getCity } from "../../redux/actions";

import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import { getLoggedInUser } from "../../helpers/authUtils";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import Loading from "../../components/Loading";
import CityDropdown from "../../components/CityDrop";

class PostForm extends Component {
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
      city: null
    };
  }

  componentDidMount() {
    this.props.getAdsDetails(this.props.match.params.id);
    this.props.getCategory();
    this.props.getCity()
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
    const {token} = getLoggedInUser()
    const val = {...values, category: this.state.category.title, city: this.state.city, user: token }
    this.props.updatePost(val, values.slug);
  };
  render() {
    const { ads } = this.props
    const convertCatToOpt = (data) =>
      data && data.map((item) => ({
        label: item.title,
        value: item,
        children: convertCatToOpt(item.children),
      }));
    const options = convertCatToOpt(this.props.data && this.props.data);
    const del = (id) => this.props.deletePost(id);
    return (
      <Container>
        {ads ?
        <Row className="mb-5">
          <AvForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup>
              <Label for="exampleEmail">Название товара</Label>
              <AvInput value={ads.title} id="exampleEmail" name="title" />
              <FormFeedback></FormFeedback>
              <FormText></FormText>
            </AvGroup>
            <AvGroup>
              <Label for="exampleText">Описание товара</Label>
              <AvInput value={ads.description} name="description" type="textarea" id="exampleText" />
            </AvGroup>
            <AvGroup>
              <Cascader
                onChange={(item) => this.setState({ category: item[0] })}
                options={options}
                >
                <Button
                  className="mb-3"
                  style={{ boxShadow: "none" }}>
                  {this.state.category?.title || "Category"}
                </Button>
              </Cascader>
            </AvGroup>
            <AvGroup>
              <CityDropdown
                cityTitle={this.state.city}
                city={this.props?.city}
                onClick={(id) => this.setState({city: this.props.city?.[id].title})}
                history={this.props.history}
              />
            </AvGroup>
            <AvGroup>
              <Label for="exampleNumber">Цена</Label>
              <AvInput
                value={ads.price}
                type="number"
                name="price"
                id="exampleNumber"
                placeholder="стоимость товара"
              />
            </AvGroup>
            <AvGroup>
              <Label for="phoneNumber">Номер Телефона</Label>
              <AvInput 
                value={ads.phoneNumber}
                name="phoneNumber" 
                type="number" 
                id="phone_number" 
                placeholder="Номер телефона"/>
            </AvGroup>
            <AvGroup style={{display: "none"}}>
              <Label for="slug">Номер Телефона</Label>
              <AvInput 
                value={ads.slug}
                name="slug" 
                type="text" 
                id="slug" 
                />
            </AvGroup>
            {/* <AvGroup>
              {/* <Label for="pass_images">Добавить картинку</Label>
              <AvInput
                onChange={this.handleFileDrop}
                type="file"
                name="pass_images"
                id="pass_images"
                multiple
              /> */}
              {/* <FormText color="muted"></FormText>
            </AvGroup> */}
            <Button type="submit" color="info">
              Опубликовать
            </Button>
            <Button
              type="button"
              onClick={() => {
                del(this.props.ads.slug);
                this.props.history.push("/");
              }}
              className="ml-2"
              color="danger"
            >
              Удалить
            </Button>
          </AvForm>
        </Row> : <Loading />
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error, ads, data, city } = state.Category;
  return { loading, error, ads, data, city };
};

export default connect(mapStateToProps, {
  updatePost,
  getAdsDetails,
  deletePost,
  getCategory,
  getCity
})(PostForm);
