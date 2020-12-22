import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { connect } from "react-redux";

import "../Header/Header.css";
import { Link } from "react-router-dom";
import { isUserAuthenticated } from "../../helpers/authUtils";
import BurgerMenu from "../BurgerMenu";
import UserDropdown from "../UserDropdownMenu";
import SearchInput from "../SearchInput";
import { getMetro } from "../../redux/actions";
import MetroDrop from "../MetroDropdown";
import qs from "qs";

class Header extends Component {
  state = {
    result: "",
  };

  componentDidMount() {
    this.props.getMetro();
  }
  render() {
    return (
      <>
        <Container className="py-3">
          <header className="Header d-none d-lg-block">
            <Row className="justify-content-between">
              <div className="d-flex align-items-center">
                <Link to="/" className="nav-menu__item">
                  Выбрать регион
                </Link>
                <MetroDrop metro={this.props.metro} />
                {/* <Link to="/" className="nav-menu__item">Выбрать метро</Link> */}
              </div>

              {isUserAuthenticated() ? (
                <ProfileDropdown />
              ) : (
                // <Link className="nav-menu__item" to="/account/logout">Выйти</Link>
                <div>
                  <Link to="/account/login" className="nav-menu__item">
                    Войти
                  </Link>
                  <Link to="/account/register" className="nav-menu__item">
                    Регистрация
                  </Link>
                </div>
              )}
            </Row>

            <Row className="d-flex mt-2">
              <Col className="logo px-0 col-6 col-lg-2">
                <h3>
                  <Link to="/" className="text-info">
                    Logo
                  </Link>
                </h3>
              </Col>
              <Col md="7">
                <SearchInput
                  result={this.state.result}
                  query={qs.parse(
                    this.props.history.location.search.replace("?", "")
                  )}
                  history={this.props.history}
                />
              </Col>
              <Link
                to="/announcement"
                className="col-6 col-lg-3 d-none d-lg-block"
              >
                <Button
                  color="info"
                  className="nav-bar__adBtn rounded-pipi w-100"
                >
                  Опубликовать Объявление
                </Button>
              </Link>
            </Row>
          </header>

          {/*-----------Mobile Header-------------*/}
          <header className="Header d-lg-none d-block">
            <Row className="d-flex mt-2 justify-content-between">
              <Col xs={3}>
                <BurgerMenu />
              </Col>

              <Col className="logo col-5 px-0 d-flex justify-content-center">
                <h3>
                  <Link to="/">Logo</Link>
                </h3>
              </Col>

              <Col xs={3} className="d-flex justify-content-end">
                <div>
                  {isUserAuthenticated() ? (
                    <ProfileDropdown />
                  ) : (
                    // <Link className="nav-menu__item" to="/account/logout">Выйти</Link>
                    <div className="mb-2">
                      <UserDropdown />
                    </div>
                  )}
                </div>
              </Col>

              <Col xs={12}>
                <SearchInput
                  result={this.state.result}
                  query={qs.parse(
                    this.props.history.location.search.replace("?", "")
                  )}
                  history={this.props.history}
                />
              </Col>
            </Row>
          </header>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { metro, loading, error } = state.Category;
  return { metro, loading, error };
};

export default connect(mapStateToProps, { getMetro })(Header);
