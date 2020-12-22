import React, { Component } from "react";
import {
  Label,
  FormFeedback,
  FormText,
  Container,
  Row,
  Button,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import {
  createPost,
  getCategory,
  getMetro,
  getCity,
} from "../../redux/actions";

import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
// import { getLoggedInUser } from "../../helpers/authUtils";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import * as Feather from "react-feather";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CityDropdown from "../CityDrop";
import "./PostForm.css";
// import AvField from "availity-reactstrap-validation/lib/AvField";

class PostForm extends Component {
  componentDidMount() {
    this.props.getCity();
    this.props.getMetro();
    this.props.getCategory();
  }
  constructor(props) {
    super(props);
    // const user = getLoggedInUser();
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.state = {
      pass_images: [],
      category: null,
      metro: null,
      city: null,
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

  handleValidSubmit = (event, values) => {
    delete values.pass_images;
    let formData = new FormData();
    this.state.pass_images.forEach((item, id) => {
      formData.append("image" + id, item);
    });
    console.log(this.state.pass_images);
    for (const key in values) {
      formData.append(key, values[key]);
    }
    if (this.state.category)
      formData.append("category", this.state.category.id);
    formData.append("metro", this.state.metro);
    formData.append("city", this.state.city);
    // for (var key of formData.keys()) {
    // }
    this.props.createPost(formData);
    this.props.history.push("/post-create-success");
  };

  dragOverHandler(ev) {
    console.log("File(s) in drop zone");
    ev.preventDefault();
  }

  dropHandler(ev) {
    console.log("File(s) dropped");
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log("... file[" + i + "].name = " + file.name);
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log(
          "... file[" + i + "].name = " + ev.dataTransfer.files[i].name
        );
      }
    }
  }

  render() {
    const convertCatToOpt = (data) =>
      data.map((item) => ({
        label: item.title,
        value: item,
        children: convertCatToOpt(item.children),
      }));
    const options = convertCatToOpt(this.props.data);
    return (
      <Container>
        <Row className="mb-5 mx-0 col-6">
          <AvForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup>
              <Label for="exampleEmail">Название товара</Label>
              <AvInput id="exampleEmail" name="title" />
              <FormFeedback></FormFeedback>
              <FormText></FormText>
            </AvGroup>
            <AvGroup>
              <Label for="exampleText">Описание товара</Label>
              <AvInput name="description" type="textarea" id="exampleText" />
            </AvGroup>
            <AvGroup>
              {/* <AvField type="select" name="category" onChange={(item) => this.setState({ category: item[0] })} options={options}>
                {this.props.data.map(item => (
                  <option key={item.id}>{item.title}</option>
                ))}
              </AvField> */}
              <Cascader
                onChange={(item) => this.setState({ category: item[0] })}
                options={options}
              >
                <Button className="mb-3" style={{ boxShadow: "none" }}>
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
            <CityDropdown
              cityTitle={this.state.city}
              city={this.props.city}
              onClick={(id) => this.setState({ city: id })}
              history={this.props.history}
            />
            <MetroDropdown
              className="mt-5"
              metroTitle={this.state.metro}
              onClick={(id) => this.setState({ metro: id })}
              metro={this.props.metro}
              history={this.props.history}
            />
            <AvGroup>
              <Label for="phone_number">Номер Телефона</Label>
              <AvInput
                name="phone_number"
                type="number"
                id="phone_number"
                placeholder="Номер телефона"
              />
            </AvGroup>
            <AvGroup>
              <Label
                for="image"
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
                <span className="pl-2 pr-2 text-center">
                  Первая фотография главная,
                  <br /> она будет отображаться в результатах поиска
                </span>
              </Label>
              <AvInput
                onChange={this.handleFileDrop}
                style={{ opacity: "0" }}
                type="file"
                name="image"
                id="image"
                multiple
              />
              <ol>
                {this.state.pass_images.length !== 0 &&
                  this.state.pass_images.map((item, i) => (
                    <li key={i + "-file"}>
                      <Row>
                        <Col md={3}>
                          <img
                            style={{ maxWidth: "100%" }}
                            src={URL.createObjectURL(item)}
                            alt={item.name}
                          ></img>
                        </Col>
                        <Col md={5}>
                          {item.name}
                          <Button
                            onClick={() => this.deleteFile(i)}
                            className="py-0 px-1"
                            color="white"
                          >
                            X
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  ))}
              </ol>
              <FormText color="muted"></FormText>
            </AvGroup>
            <Button type="submit" color="info">
              Опубликовать
            </Button>
          </AvForm>
        </Row>
      </Container>
    );
  }
}

const MetroDropdown = ({ metro, onClick, metroTitle }) => {
  const handleSetMetro = (id) => {
    onClick(id);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown className="mb-3" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="a" caret>
        <span>{metroTitle || "Выбрать метро"}</span>
      </DropdownToggle>
      <DropdownMenu
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: (data) => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  maxHeight: "100px",
                },
              };
            },
          },
        }}
      >
        {metro ? (
          metro.map((item) => (
            <DropdownItem
              className="metro-item"
              onClick={() => {
                handleSetMetro(item.id);
              }}
              key={item.id}
            >
              {item.title}
            </DropdownItem>
          ))
        ) : (
          <span style={{ fontSize: "15px" }}>"Что то пошло не так"</span>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

const mapStateToProps = (state) => {
  const { loading, error, data, metro, city } = state.Category;
  return { loading, error, data, metro, city };
};

export default connect(mapStateToProps, {
  createPost,
  getCategory,
  getMetro,
  getCity,
})(PostForm);
