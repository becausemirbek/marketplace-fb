import React, { Component } from "react";
import { Container } from "reactstrap";
import FilterForm from "../../components/FilterForm";

class Property extends Component {
  render() {
    return (
      <Container className="px-0">
        <h1>Недвижимость</h1>
        <FilterForm />
      </Container>
    );
  }
}

export default Property;
