import React from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import { Alert, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

const PostLoading = (props) => {
  const history = useHistory();
  const backHome = () => history.push("/");
  return props.loading ? (
    <Loading />
  ) : !props.error ? (
    <Container className="px-0 mt-5 mb-5">
      <Alert color="success">Объявление успешно опубликовано!</Alert>
      <Button onClick={backHome} color="info">
        Вернуться в Главное меню
      </Button>
    </Container>
  ) : (
    <Container className="px-0 mt-5 mb-5">
      {console.log(props.error)}
      <Alert color="danger">Что то пошло не так, попробуйте позже!</Alert>
      <Button onClick={backHome} color="info">
        Вернуться в Главное меню
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loading, error } = state.Category;
  return { loading, error };
};

export default connect(mapStateToProps)(PostLoading);
