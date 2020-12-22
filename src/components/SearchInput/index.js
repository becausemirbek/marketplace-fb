import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button } from "reactstrap";
import "./SearchInput.css";
import { AvForm, AvInput } from "availity-reactstrap-validation";
import qs from "qs";
import { liveSearch, liveSearchFailed } from "../../redux/actions";
import { connect } from "react-redux";

class SearchInput extends Component {
  state = {
    res: "",
  };

  handleOnInputChange = (e) => {
    const value = e.target.value;
    this.setState({ res: value });
  };
  componentDidUpdate(prevProps, prevState) {
    // if (this.state.res === "" && this.state.res !== prevState.res) {
    //   this.props.liveSearchFailed();
    // }
    if (this.state.res !== prevState.res) {
      this.props.liveSearch(this.state.res);
    }
  }

  // fetchSearchResult() {
  // this.props.getSearchResult(this.state.res);
  // }
  render() {
    const { query, history } = this.props;

    const handleValidSubmit = (e, values) => {
      query.search = values.search;
      history.push(`/home?${qs.stringify(query)}`);
    };
    return (
      <AvForm onValidSubmit={handleValidSubmit}>
        <div className="live-search-container ">
          <InputGroup className="search-inp rounded-pipi">
            <AvInput
              autoComplete="off"
              name="search"
              placeholder="Поиск"
              value={this.state.res}
              onChange={this.handleOnInputChange}
              className="search-inp__input"
            />
            <InputGroupAddon addonType="prepend">
              <Button
                type="submit"
                outline
                color="info"
                className="search-inp__btn"
              >
                Найти
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="d-flex justify-content-center">
            <div
              className="live-search-elems rounded text-left"
              style={{ display: this.state.res ? "block" : "none" }}
            >
              {!this.props.postTitle.length && (
                <div className="px-2 mx-2 mt-2"> Ничего не найдено </div>
              )}
              {this.props.postTitle.map((item) => (
                <div
                  className="live-search-item px-2 mx-2"
                  key={item.id}
                  onClick={() => {
                    this.props.history.push("/product-page/" + item.id);
                    this.props.liveSearchFailed();
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AvForm>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error, postTitle } = state.Category;
  return { loading, error, postTitle };
};

export default connect(mapStateToProps, { liveSearch, liveSearchFailed })(
  SearchInput
);
