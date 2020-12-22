import {
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_ADS_DETAILS,
  GET_ADS_DETAILS_SUCCESS,
  GET_ADS_DETAILS_FAILED,
  LOAD_MORE,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAILED,
  LIVE_SEARCH,
  LIVE_SEARCH_SUCCESS,
  LIVE_SEARCH_FAILED,
  UPDATE_POST,
  // GET_POST,
  // POST_RECEIVED,
  // POST_REQUEST_FAILED,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  DELETE_POST,
  GET_PROFILE_ADS,
  GET_PROFILE_ADS_SUCCESS,
  GET_PROFILE_ADS_FAILED,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
  GET_METRO_SUCCESS,
  GET_METRO_FAILED,
  GET_METRO,
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAILED,
  CREATE_RESUME,
  CREATE_RESUME_SUCCESS,
  CREATE_RESUME_FAILED,
  GET_RESUME,
  GET_RESUME_FAILED,
  GET_RESUME_SUCCESS,
  GET_RESUME_DETAILS,
  GET_RESUME_DETAILS_SUCCESS,
  GET_RESUME_DETAILS_FAILED,
  CREATE_EDUCATION_INFO,
  CREATE_EDUCATION_INFO_SUCCESS,
  CREATE_EDUCATION_INFO_FAILED,
  GET_EDUCATION,
  GET_EDUCATION_SUCCESS,
  GET_EDUCATION_FAILED,
} from "./constants";

export const getCategory = () => ({
  type: GET_CATEGORY,
});

export const getCategorySuccess = (data) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: data,
});

export const getCategoryFailed = (err) => ({
  type: GET_CATEGORY_FAILED,
  payload: err,
});

// ------posts-------
export const getPosts = (query) => ({
  type: GET_POSTS,
  payload: { query },
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailed = (err) => ({
  type: GET_POSTS_FAILED,
  payload: err,
});

// -------ads--------
export const getAdsDetails = (id) => ({
  type: GET_ADS_DETAILS,
  payload: id,
});

export const getAdsDetailsSuccess = (ads) => ({
  type: GET_ADS_DETAILS_SUCCESS,
  payload: ads,
});

export const getAdsDetailsFailed = (err) => ({
  type: GET_ADS_DETAILS_FAILED,
  payload: err,
});

export const loadMore = (url) => ({
  type: LOAD_MORE,
  payload: { url },
});

export const loadMoreSuccess = (data, next) => ({
  type: LOAD_MORE_SUCCESS,
  payload: { data, next },
});

export const loadMoreFailed = (err) => ({
  type: LOAD_MORE_FAILED,
  payload: err,
});

export const getProfileAds = () => ({
  type: GET_PROFILE_ADS,
});

export const getProfileAdsSuccess = (data) => ({
  type: GET_PROFILE_ADS_SUCCESS,
  payload: data,
});

export const getProfileAdsFailed = (err) => ({
  type: GET_PROFILE_ADS_FAILED,
  payload: err,
});

//-------search-------
export const liveSearch = (title) => ({
  type: LIVE_SEARCH,
  payload: { title },
});

export const liveSearchSuccess = (data) => ({
  type: LIVE_SEARCH_SUCCESS,
  payload: data,
});

export const liveSearchFailed = (err) => ({
  type: LIVE_SEARCH_FAILED,
  payload: err,
});

// -----CRUD-----

// export const getPost = () => ({
//   //{query}
//   type: GET_POST,
//   // payload: {query}
// });

// export const postReceived = (data) => ({
//   type: POST_RECEIVED,
//   payload: data,
// });

// export const postRequestFailed = (err) => ({
//   type: POST_REQUEST_FAILED,
//   payload: err,
// });

export const createPost = (data) => ({
  type: CREATE_POST,
  payload: data,
});

export const createPostSuccess = () => ({
  type: CREATE_POST_SUCCESS,
});

export const createPostFailed = (err) => ({
  type: CREATE_POST_FAILED,
  payload: err,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const updatePost = ({ data, id }) => ({
  type: UPDATE_POST,
  payload: { data, id },
});

export const updatePostSuccess = () => ({
  type: UPDATE_POST_SUCCESS,
});

export const updatePostFailed = (err) => ({
  type: UPDATE_POST_FAILED,
  payload: err,
});

//----actions для метро----

export const getMetro = () => ({
  type: GET_METRO,
});

export const getMetroSuccess = (metro) => ({
  type: GET_METRO_SUCCESS,
  payload: metro,
});

export const getMetroFailed = (err) => ({
  type: GET_METRO_FAILED,
  payload: err,
});

// ----actions для городов----

export const getCity = () => ({
  type: GET_CITY,
});

export const getCitySuccess = (city) => ({
  type: GET_CITY_SUCCESS,
  payload: city,
});

export const getCityFailed = (err) => ({
  type: GET_CITY_FAILED,
  payload: err,
});

// ----actions для создания Резюме----
export const createResume = (data) => ({
  type: CREATE_RESUME,
  payload: data,
});

export const createResumeSuccess = () => ({
  type: CREATE_RESUME_SUCCESS,
});

export const createResumeFailed = (err) => ({
  type: CREATE_RESUME_FAILED,
  payload: err,
});

export const getResume = () => ({
  type: GET_RESUME,
});

export const getResumeSuccess = (resume) => ({
  type: GET_RESUME_SUCCESS,
  payload: resume,
});

export const getResumeFailed = (err) => ({
  type: GET_RESUME_FAILED,
  payload: err,
});

export const getResumeDetails = (id) => ({
  type: GET_RESUME_DETAILS,
  payload: id,
});

export const getResumeDetailsSuccess = (res) => ({
  type: GET_RESUME_DETAILS_SUCCESS,
  payload: res,
});

export const getResumeDetailsFailed = (err) => ({
  type: GET_RESUME_DETAILS_FAILED,
  payload: err,
});

export const createEducationInfo = (data) => ({
  type: CREATE_EDUCATION_INFO,
  payload: data,
});

export const createEducationInfoSuccess = () => ({
  type: CREATE_EDUCATION_INFO_SUCCESS,
});

export const createEducationInfoFailed = (err) => ({
  type: CREATE_EDUCATION_INFO_FAILED,
  payload: err,
});

export const getEducation = () => ({
  type: GET_EDUCATION,
});

export const getEducationSuccess = (education) => ({
  type: GET_EDUCATION_SUCCESS,
  payload: education,
});

export const getEducationFailed = (err) => ({
  type: GET_EDUCATION_FAILED,
  payload: err,
});
