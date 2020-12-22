// @flow
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { API_URL } from "../../helpers/constants";
import axios from "axios";

import {
  GET_CATEGORY,
  GET_POSTS,
  GET_ADS_DETAILS,
  LOAD_MORE,
  CREATE_POST,
  DELETE_POST,
  GET_PROFILE_ADS,
  UPDATE_POST,
  GET_METRO,
  GET_CITY,
  LIVE_SEARCH,
  CREATE_RESUME,
  GET_RESUME,
  GET_RESUME_DETAILS,
  CREATE_EDUCATION_INFO,
  GET_EDUCATION,
} from "./constants";

import {
  getCategoryFailed,
  getCategorySuccess,
  getPostsSuccess,
  getAdsDetailsSuccess,
  loadMoreSuccess,
  loadMoreFailed,
  // liveSearchSuccess,
  // liveSearchFailed,
  createPostFailed,
  createPostSuccess,
  getProfileAdsFailed,
  getProfileAdsSuccess,
  updatePostSuccess,
  updatePostFailed,
  getMetroSuccess,
  getMetroFailed,
  getCitySuccess,
  getCityFailed,
  getPosts,
  liveSearchSuccess,
  liveSearchFailed,
  createResumeSuccess,
  createResumeFailed,
  getResumeSuccess,
  getResumeFailed,
  getResumeDetailsSuccess,
  getResumeDetailsFailed,
  createEducationInfoSuccess,
  createEducationInfoFailed,
  getEducationSuccess,
  getEducationFailed,
} from "./actions";
import { getLoggedInUser } from "../../helpers/authUtils";

function* getCategory() {
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/category/`);
    yield put(getCategorySuccess(data.results));
  } catch (e) {
    yield put(getCategoryFailed(e.message));
  }
}

function* _getPosts() {
  const test = []
  try {
    const { data } = yield call(axios, `https://kaeda-test-default-rtdb.firebaseio.com/products.json`);
    test.push(data)
    yield put(getPostsSuccess(test));
  } catch (e) {
    yield put(getCategoryFailed(e.message));
  }
}

function* getProfileAds() {
  const user = getLoggedInUser();
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/postauthor/`, {
      headers: { Authorization: "Token " + user.token },
    });
    yield put(getProfileAdsSuccess(data));
  } catch (e) {
    yield put(getProfileAdsFailed(e.message));
  }
}

function* loadMore({ payload: { url } }) {
  try {
    const { data } = yield call(axios, url);
    // console.log("saga loadmore",data.result);
    yield put(loadMoreSuccess(data.result, data.link.next));
  } catch (e) {
    yield put(loadMoreFailed(e.message));
  }
}

// ------create-post------
function* createPost({ payload }) {
  // const user = getLoggedInUser();
  try {
    // console.log(user);
    let { data } = yield call(
      axios.post,
      `${API_URL}/products.json`,
      payload,
      {
        headers: {
          // Authorization: "Token " + user.token,
          "content-type": "Application/json",
        },
      }
    );
    console.log("success", data);
    yield put(createPostSuccess("Success"));
  } catch (e) {
    yield put(createPostFailed(e.message));
  }
}

function* updatePost({ payload: { data, id } }) {
  const user = getLoggedInUser();
  // console.log(Array.from(data.keys()), data.get("title"), id);
  try {
    let resp = yield call(axios, `${API_URL}/api/v1/post/${id}/update/`, data, {
      method: "PATCH",
      headers: {
        Authorization: "Token " + user.token,
        "content-type": "multipart/form-data",
      },
    });
    // console.log(resp.data, user.token);
    yield put(updatePostSuccess("Success"));
  } catch (e) {
    // console.log(e);
    yield put(updatePostFailed(e.message));
  }
}

function* deletePost({ payload }) {
  const user = getLoggedInUser();
  try {
    yield call(axios.delete, `${API_URL}/api/v1/post/${payload}/delete/`, {
      headers: { Authorization: "Token " + user.token },
    });
    yield put(getPosts(""));
  } catch (e) {}
}
// function* handleSearch({payload: title}) {
//   try {
//     const { data } = yield call(axios, `${API_URL}/api/v1/post/`);
//     yield put(liveSearchSuccess(data.result));
//   } catch (e) {
//     yield put(loadMoreFailed(e.message))
//   }
// }

//Ads details
function* _getAdsDetails({ payload }) {
  const test = [];
  try {
    const { data } = yield call(axios, `https://kaeda-test-default-rtdb.firebaseio.com/products.json`);
    for(let item in data && data){
        test.push(data[item])
    }
    const itemDetails = test.filter(item => item.id == payload)
    yield put(getAdsDetailsSuccess(itemDetails[0]));
  } catch (e) {
    yield put(getCategoryFailed(e.message));
  }
}

function* getMetro() {
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/metro/`);
    yield put(getMetroSuccess(data.results));
  } catch (e) {
    yield put(getMetroFailed(e.message));
  }
}

function* getCity() {
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/city/`);
    yield put(getCitySuccess(data.results));
  } catch (e) {
    yield put(getCityFailed(e.message));
  }
}

function* getSearchResult({ payload: { title } }) {
  try {
    const { data } = yield call(
      axios,
      `${API_URL}/api/v1/post/title/?title=${title}&limit=10`
    );
    yield put(liveSearchSuccess(data.results));
  } catch (e) {
    yield put(liveSearchFailed(e.message));
  }
}

function* handleCreateResume({ payload }) {
  const user = getLoggedInUser();
  try {
    // console.log(user);
    let userExp = JSON.parse(localStorage.getItem("userExp"));
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = yield call(
      axios.post,
      `${API_URL}/api/v1/resume/create/`,
      payload,
      {
        headers: {
          Authorization: "Token " + user.token,
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log("RESUME", data);

    // if (userExp) {
    //   yield call(axios.post, `${API_URL}/api/v1/resume/create/`, userExp, {
    //     headers: {
    //       Authorization: "Token " + user.token,
    //       "content-type": "multipart/form-data",
    //     },
    //   });
    //   localStorage.removeItem("userExp");
    // }

    // if (userInfo) {
    //   yield call(axios.post, `${API_URL}/api/v1/resume/create/`, userInfo, {
    //     headers: {
    //       Authorization: "Token " + user.token,
    //       "content-type": "multipart/form-data",
    //     },
    //   });
    //   localStorage.removeItem("userInfo");
    // }

    // console.log("success", data);
    yield put(createResumeSuccess("Success"));
  } catch (e) {
    yield put(createResumeFailed(e.message));
    // console.log(e.message);
  }
}

function* handleGetResume() {
  const user = getLoggedInUser();
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/resume/`, {
      headers: { Authorization: "Token " + user.token },
    });
    yield put(getResumeSuccess(data.results));
  } catch (e) {
    yield put(getResumeFailed(e.message));
  }
}

function* handleGetResumeDetails({ payload }) {
  const user = getLoggedInUser();
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/resume/${payload}/`, {
      headers: { Authorization: "Token " + user.token },
    });
    yield put(getResumeDetailsSuccess(data));
  } catch (e) {
    yield put(getResumeDetailsFailed(e.message));
  }
}

function* handleCreateEducation({ payload }) {
  const user = getLoggedInUser();
  try {
    // console.log(user);
    let { data } = yield call(
      axios.post,
      `${API_URL}/api/v1/education/create`,
      payload,
      {
        headers: {
          Authorization: "Token " + user.token,
          "content-type": "multipart/form-data",
        },
      }
    );
    // console.log("success", data);
    yield put(createEducationInfoSuccess("Success"));
  } catch (e) {
    yield put(createEducationInfoFailed(e.message));
  }
}

function* handleGetEducation() {
  const user = getLoggedInUser();
  try {
    const { data } = yield call(axios, `${API_URL}/api/v1/education`, {
      headers: { Authorization: "Token " + user.token },
    });
    yield put(getEducationSuccess(data.results));
  } catch (e) {
    yield put(getEducationFailed(e.message));
  }
}

export function* watchGetCategory() {
  yield takeEvery(GET_CATEGORY, getCategory);
}

export function* watchCreatePost() {
  yield takeEvery(CREATE_POST, createPost);
}

export function* watchGetPosts() {
  yield takeEvery(GET_POSTS, _getPosts);
}

export function* watchGetAdsDetails() {
  yield takeEvery(GET_ADS_DETAILS, _getAdsDetails);
}

export function* watchLoadMore() {
  yield takeEvery(LOAD_MORE, loadMore);
}

export function* watchDeletePost() {
  yield takeEvery(DELETE_POST, deletePost);
}

export function* watchGetProfileAds() {
  yield takeEvery(GET_PROFILE_ADS, getProfileAds);
}

export function* watchUpdatePost() {
  yield takeEvery(UPDATE_POST, updatePost);
}

export function* watchGetMetro() {
  yield takeEvery(GET_METRO, getMetro);
}

export function* watchGetCity() {
  yield takeEvery(GET_CITY, getCity);
}

export function* watchGetSearchResult() {
  yield takeEvery(LIVE_SEARCH, getSearchResult);
}

export function* watchCreateResume() {
  yield takeEvery(CREATE_RESUME, handleCreateResume);
}

export function* watchGetResume() {
  yield takeEvery(GET_RESUME, handleGetResume);
}

export function* watchGetResumeDetails() {
  yield takeEvery(GET_RESUME_DETAILS, handleGetResumeDetails);
}

export function* watchCreateEducation() {
  yield takeEvery(CREATE_EDUCATION_INFO, handleCreateEducation);
}

export function* watchGetEducation() {
  yield takeEvery(GET_EDUCATION, handleGetEducation);
}
function* categorySaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetPosts),
    fork(watchGetAdsDetails),
    fork(watchLoadMore),
    fork(watchCreatePost),
    fork(watchDeletePost),
    fork(watchGetProfileAds),
    fork(watchUpdatePost),
    fork(watchGetMetro),
    fork(watchGetCity),
    fork(watchGetSearchResult),
    fork(watchCreateResume),
    fork(watchGetResume),
    fork(watchGetResumeDetails),
    fork(watchCreateEducation),
    fork(watchGetEducation),
  ]);
}

export default categorySaga;
