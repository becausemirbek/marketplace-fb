import React, { Component } from "react";
import { connect } from "react-redux";

import * as Feather from "react-feather";
import { getCategory } from "../../redux/actions";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import { Button } from "reactstrap";
import "./Category.css";
import qs from "qs";

// Функция принимает item, создает child
const convertCatToOpt = (data) =>
  data && data.map((item) => ({
    label: item.title,
    value: item.title,
    children: convertCatToOpt(item.children),
  }));

class CategoryDropdown extends Component {
  state = {
    dropdownOpen: false,
  };
  componentDidMount() {
    this.props.getCategory();
  }

  handleSetCategory = (id) => {
    const query = qs.parse(this.props.history.location.search.replace("?", ""));
    query.category = id.length > 1 ? id[id.length - 1] : id[0];
    this.props.history.push(`/home?${qs.stringify(query)}`);
  };

  render() {
    const options = convertCatToOpt(this.props.data && this.props.data);
    return (
      <Cascader onChange={this.handleSetCategory} options={options}>
        <Button className="mb-3" style={{ boxShadow: "none" }} color="info">
          {" "}
          <Feather.AlignLeft className="mr-2" />
          Категории
        </Button>
      </Cascader>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.Category;
  return { data, loading, error };
};

export default connect(mapStateToProps, { getCategory })(CategoryDropdown);
