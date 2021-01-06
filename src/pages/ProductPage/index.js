import React, { Component } from "react";
import ProductDetails from "../../components/ProductDetails";

class ProductPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prev) {
    if (this.props.match.params.id !== prev.match.params.id) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
        <ProductDetails
          history={this.props.history}
          id={this.props.match.params.id}
        />
    );
  }
}

export default ProductPage;
