import React, { Component } from "react";

import { connect } from "react-redux";
import { getResumeDetails } from "../../redux/actions";
import { Container, Row, Card, Alert, Button } from "reactstrap";

import "./ResumeDetails.css";
import Loading from "../../components/Loading";
import BreadCrumb from "../../components/Breadcrumbs";
class ResumeDetails extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.getResumeDetails(this.props.match.params.id);
  };

  render() {
    const breadCrumbsItems = [
      {
        title: "Главная",
        path: "/",
      },
      {
        title: "Резюме",
        path: "/resume",
      },
      {
        title: this.props.resumeDetails.title,
        path: this.props.resumeDetails.id,
      },
    ];
    // console.log(this.props.resumeDetails);
    return (
      <Container className="px-0">
        <BreadCrumb items={breadCrumbsItems} />
        {this.props.resumeDetails !== null ? (
          !this.props.loading ? (
            <Card className="mb-5">
              <Row className="px-0 mx-3">
                <div className="user-details w-100">
                  <div className="d-flex justify-content-center">
                    <div className="resume-avatar">
                      <img
                        src={this.props.resumeDetails.avatar}
                        alt="user-avatar"
                        className="w-100 user-avatar"
                      />
                    </div>
                  </div>
                  <div className="user-description d-flex justify-content-between align-items-center mb-5 mt-3">
                    <h3>
                      Имя <span>{this.props.resumeDetails.title}</span>
                    </h3>
                  </div>
                  <div className="user-description d-flex justify-content-between align-items-center mb-3 mt-3">
                    <h3>Email</h3>
                    <p className="sub-category-ads">
                      {this.props.resumeDetails.email}
                    </p>
                  </div>
                  <hr className="pb-3" />
                  <div className="user-description d-flex justify-content-between align-items-center mb-5">
                    <h3>Возраст</h3>
                    <p className="category-ads">
                      {this.props.resumeDetails.age}
                    </p>
                  </div>
                  <div className="user-description d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Пол</h3>
                    <p className="sub-category-ads">
                      {this.props.resumeDetails.gender}
                    </p>
                  </div>
                  <div className="user-description d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Местоположение</h3>
                    <p className="sub-category-ads">
                      {this.props.resumeDetails.location}
                    </p>
                  </div>
                  <div className="user-description d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Резюме</h3>
                    <p className="sub-category-ads">
                      <a
                        href={this.props.resumeDetails.file_resume}
                        target="_blank"
                      >
                        {this.props.resumeDetails.file_resume
                          ? "посмотреть Резюме"
                          : null}
                      </a>
                    </p>
                  </div>
                  <hr className="pb-5" />
                  {/* <div className="category-details d-flex justify-content-between align-items-center mb-5 mt-5">
                <h3>Размещено</h3>
                <p className="publish-date">{this.props.ads.publish}</p>
              </div> */}
                </div>
              </Row>
            </Card>
          ) : (
            <Loading />
          )
        ) : (
          <div className="px-0 mt-5 mb-5">
            <Alert color="danger">Что то пошло не так, попробуйте позже!</Alert>
            <Button onClick={() => this.props.history.push("/")} color="info">
              Вернуться в Главное меню
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { resumeDetails, error, loading } = state.Category;
  return { resumeDetails, error, loading };
};

export default connect(mapStateToProps, { getResumeDetails })(ResumeDetails);
