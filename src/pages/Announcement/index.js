import React from "react";
import { Redirect } from "react-router-dom";
import PostForm from "../../components/PostForm";
import { getLoggedInUser } from "../../helpers/authUtils";

const Announcement = (props) => {
  const t = getLoggedInUser()
  if(!t) {
    return <Redirect to="account/register" />
  }
  return <PostForm history={props.history} />;
};

export default Announcement;
