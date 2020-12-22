import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <Container>
        <Row className="profile-page border-top border-bottom mt-5">
          <Col md={5} className="mt-5">
            <div className="mb-5">
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="profile-icon" className="rounded-circle" width='100px' height='100px'/>
              </div>
              <h3 className="user-name mt-2">Name User</h3>
              <h6 className="user-id">Мой id 08552</h6>
            </div>

            <div className="ads-details mb-5 pb-4">
              <p className="mb-2"><span>Мои объявления</span></p>
              <p className="mb-2"><span>Сообщения</span></p>
              <p className="mb-4"><span>Избранное</span></p>
              <p><span>Настройка</span></p>
            </div>
          </Col>
          <Col md={7} className="mt-5">
            <Row className="sale-status">
              <p className="mr-5 pr-3 border-right">На продаже</p>
              <p className="pr-3 border-right">Продано</p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;