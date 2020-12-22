import React, { Component } from "react";
import { loginUser } from "../../redux/actions";
import { getMetro, getCity } from "../../redux/actions";
import { connect } from "react-redux";
import { Row, Container } from "reactstrap";
import CategoryDropdown from "../../components/CategoryDropdownBtn/CategoryDropdown";

import headerBg from "../../assets/header-bg.jpg";
// import ProductItem from '../../components/ProductsItem/ProductsItem';
import CarouselMenu from "../../components/CarouselMenu/CarouselMenu";
// import { getCategory } from '../../redux/actions';
import data from "./data";
// import qs from 'qs';
import ProductList from "../../components/ProductList";
import BtnLoadMore from "../../components/BtnLoadMore";
import ScrollToTop from "../../components/ScrollToTop";
import DropDown from "../../components/Drodown";
import AdsBtn from "../../components/AdsBtn";

class Home extends Component {
  componentDidMount() {
    this.props.getCity();
    this.props.getMetro();
  }

  render() {
    // console.log(qs.parse(this.props.history.location.search.replace('?','')));
    return (
      <div>
        <div className="header-bg d-none d-md-block">
          <img src={headerBg} alt="headerBg" className="header-bg__img" />
        </div>
        <div className="d-md-none">
          <img src={headerBg} alt="headerBg" className="w-100" />
        </div>
        <Container>
          <Row className="mt-5">
            <CategoryDropdown history={this.props.history} />
            {/* <p className="mt-5 ml-2 d-none d-md-flex">Все Объявления в России 5896</p> */}
          </Row>
          <CarouselMenu data={data} />
          <Row className="mt-5">
            <h1 className="ml-2">Объявления</h1>
          </Row>
          <Row className="mx-0 mb-4">
            <DropDown
              history={this.props.history}
              metro={this.props.metro}
              title="Метро"
              type="metro"
            />
            <DropDown
              className="ml-3"
              history={this.props.history}
              metro={this.props.city}
              title="Регион"
              type="city"
            />
          </Row>
          <Row className="mb-5 pb-2">
            <ProductList {...this.props} />
          </Row>
          <ScrollToTop />
          <BtnLoadMore />
        </Container>
        <AdsBtn history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.Auth;
  // const { data, loading, error } = state.Category
  const { metro, loading, error, city } = state.Category;
  return { user, metro, loading, error, city };
};
export default connect(mapStateToProps, { loginUser, getMetro, getCity })(Home);
