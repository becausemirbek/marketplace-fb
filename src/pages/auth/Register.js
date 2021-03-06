import React, { Component } from "react";
import { Container, Row, Card, CardBody, Col, Alert } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import Axios from "axios";
import { API_URL } from "../../helpers/constants";
import { Cookies } from "react-cookie";

class Register extends Component {
  state = {
    err: null,
  };
  handleValidSubmit = async (e, values) => {
    // console.log(values)
    const cookie = new Cookies();

    try {
      let d = {...values, returnSecureToken: true};
      const { data } = await Axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVONmsfMZcL0W3YFQ_mJAWCbr1Dv1qaaM`,
        d
      );
      cookie.set("user", JSON.stringify({ token: data.idToken }));
      this.props.history.push("/");
    } catch (e) {
      this.setState({ err: {...e} });
    }
  };
  render() {
    console.log(this.state.err);
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
                  {this.state?.err?.response?.data.error &&
                      <Alert color="danger">
                        {this.state.err.response.data.error.message}
                      </Alert>
                    }
                  <AvForm onValidSubmit={this.handleValidSubmit}>
                    {/* <AvField
                      name="username"
                      label="Введите Имя Пользователя"
                      type="text"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[A-Za-z0-9]+$", errorMessage: "" },
                      }}
                    /> */}

                    <AvField
                      name="email"
                      label="Введите ваш Email"
                      type="text"
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />

                    <AvField
                      name="password"
                      label="Придумайте пароль"
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

                    {/* <AvField
                      name="password2"
                      type="text"
                      label="Повторите пароль"
                      errorMessage="Пароли не совпадают"
                      validate={{
                        required: { value: true },
                        minLength: { value: 8 },
                        maxLength: { value: 16 },
                        match: { value: "password1" },
                      }}
                    /> */}
                    <Button className="w-100" color="info">
                      Зарегистрироватся
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

export default Register;
