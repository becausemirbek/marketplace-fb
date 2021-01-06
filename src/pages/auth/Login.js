import React, { Component } from "react";
// import { isUserAuthenticated } from '../../helpers/authUtils';
// import { Redirect } from 'react-router-dom';
import { Container, Row, Card, CardBody, Col, Alert } from "reactstrap";
import { Button } from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";
import { Cookies } from "react-cookie";
import Axios from "axios";
import { API_URL } from "../../helpers/constants";

class Login extends Component {
  state = {
    err: null,
  };

  handleValidSubmit = async (e, values) => {
    const cookie = new Cookies();

    try {
      const { data } = await Axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVONmsfMZcL0W3YFQ_mJAWCbr1Dv1qaaM`,
        values
      );
      cookie.set("user", JSON.stringify({ token: data.idToken }));
      this.props.history.push("/");
    } catch (e) {
      this.setState({ err: {...e} });
    }
  };
  render() {
    // if(isUserAuthenticated()) return <Redirect to="/"/>;
    return (
      <div>
        <Container>
          <Row
            className="justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <Col md={6} xs={12}>
              <Card
                className="my-2"
                style={{ boxShadow: "-5px 9px 22px -2px #ddd4d4" }}
              >
                <CardBody>
                  {/* {this.state.err && (
                    <h4>{this.state?.err?.data?.non_field_errors}</h4>
                  )} */}
                  {this.state?.err &&
                    this.state?.err?.response.data?.error && (
                      <Alert color="danger">
                        {this.state.err.response.data.error.message}
                      </Alert>
                    )}
                  <AvForm onValidSubmit={this.handleValidSubmit}>
                    <AvField
                      name="email"
                      label="Введите Email"
                      type="email"
                      errorMessage="Пожалуйста введите корректный email"
                      validate={{
                        required: { value: true },
                      }}
                    />

                    <AvField
                      name="password"
                      label="Введите пароль"
                      type="text"
                      // validate={{ password: true }}
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Пожалуйста введите пароль",
                        },
                        minLength: {
                          value: 8,
                          errorMessage:
                            "Ваш пароль должен содержать от 8 до 16 символов",
                        },
                        maxLength: {
                          value: 16,
                          errorMessage:
                            "Ваше пароль должен быть между 8 и 16 символов ",
                        },
                      }}
                    />
                    <Button className="w-100" color="info">
                      Войти
                    </Button>
                  </AvForm>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
