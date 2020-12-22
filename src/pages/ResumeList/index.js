import React, { Component } from "react";
import { connect } from "react-redux";
import { getResume, getEducation } from "../../redux/actions";

import ResumeItem from "../../components/ResumeItem";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";

class ResumeList extends Component {
  componentDidMount() {
    this.props.getResume();
    this.props.getEducation();
  }

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
    ];
    const { resume, loading, error, education } = this.props;
    return (
      <Container className="px-0">
        {console.log(education)}
        <BreadCrumb items={breadCrumbsItems} />
        {!loading ? (
          <Row className="mb-5">
            {resume.map((item) => (
              <ResumeItem
                key={item.id}
                id={item.id}
                title={item.title}
                avatar={item.avatar}
                email={item.email}
                file_resume={item.file_resume}
                gender={item.gender}
                location={item.location}
                error={error}
                loading={loading}
                history={this.props.history}
              />
            ))}
          </Row>
        ) : (
          <Loading />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { resume, loading, error, education } = state.Category;
  return { resume, loading, error, education };
};

export default connect(mapStateToProps, { getResume, getEducation })(
  ResumeList
);
