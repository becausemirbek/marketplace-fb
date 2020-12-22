import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";
import { getProfileAds } from "../../redux/actions";

import "./ProfileWithAds.css";
import { Link } from "react-router-dom";
import ProductList from "../ProductList";

class ProfileWithAds extends Component {
  render() {
    return (
      <Container>
        <Row className="profile-page border-top border-bottom mt-5">
          <Col md={5} className="mt-5">
            <div className="mb-5">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                  alt="profile-icon"
                  className="rounded-circle"
                  width="100px"
                  height="100px"
                />
              </div>
              <h3 className="user-name mt-2">Name User</h3>
              <h6 className="user-id">Мой id 08552</h6>
            </div>

            <div className="ads-details mb-5 pb-4">
              <p className="mb-2">
                <span>Мои объявления</span>
              </p>
              <p className="mb-2">
                <span>Сообщения</span>
              </p>
              <p className="mb-5">
                <span>Избранное</span>
              </p>
              <p>
                <span>Настройка</span>
              </p>
            </div>
          </Col>
          <Col md={7} className="mt-5">
            <Row className="sale-status mb-5">
              <Link to="/" className="mr-5 pr-3 border-right">
                На продаже
              </Link>
              <Link to="/" className="pr-3 border-right">
                Продано
              </Link>
            </Row>

            {/* <div style={{maxWidth:'8rem'}}>
                <div className="mb-1">
                <img className="rounded" src="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg" alt="" width="150rem" height="150rem"/>
                </div>
                <div className="mb-1 product-buttons">
                <Button color="success" className="profile-ads_btn">Редактировать</Button>
                </div>
                <div className="mb-4">
                <Button color="success" className="profile-ads_btn">Поднять</Button>
                </div>
                <div>
                <Button className="btn btn-outline-danger profile-ads_btn" color="white">Удалить</Button>
                </div>
              </div> */}
          </Col>

          <ProductList isMyPost {...this.props} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { myPosts, loading, error } = state.Category;
  return { myPosts, loading, error };
};

export default connect(mapStateToProps, { getProfileAds })(ProfileWithAds);
// export default ProfileWithAds;
