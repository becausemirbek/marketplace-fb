import React, { Component } from "react";
import { Row, Button } from "reactstrap";
import { connect } from "react-redux";

import * as Feather from "react-feather";
import { loadMore } from "../../redux/actions";
import Loading from "../Loading";
import "./BtnLoadMore.css";

class BtnLoadMore extends Component {
  render() {
    return !this.props.next ? null : (
      <Row className="mb-5 justify-content-center">
        {!this.props.loadMoreLoading ? (
          <Button
            onClick={() => this.props.loadMore(this.props.next)}
            className="btn-outline-info rounded btn-load"
            color="white"
          >
            Показать еще <Feather.ChevronDown />{" "}
          </Button>
        ) : (
          <Loading />
        )}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts, loading, error, next, loadMoreLoading } = state.Category;
  return { posts, loading, error, next, loadMoreLoading };
};

export default connect(mapStateToProps, { loadMore })(BtnLoadMore);
