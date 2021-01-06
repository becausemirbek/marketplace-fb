// @flow
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
  GET_POST,
  POST_RECEIVED,
  POST_REQUEST_FAILED,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAILED,
  CREATE_RESUME,
  CREATE_RESUME_FAILED,
  CREATE_RESUME_SUCCESS,
  GET_RESUME,
  GET_RESUME_SUCCESS,
  GET_RESUME_FAILED,
  GET_RESUME_DETAILS,
  GET_RESUME_DETAILS_SUCCESS,
  GET_RESUME_DETAILS_FAILED,
  CREATE_EDUCATION_INFO,
  CREATE_EDUCATION_INFO_SUCCESS,
  CREATE_EDUCATION_INFO_FAILED,
  GET_EDUCATION,
  GET_EDUCATION_SUCCESS,
  GET_EDUCATION_FAILED,
  GET_USER_POSTS,
  GET_USER_POSTS_SUCCESS,
  GET_SEARCHED_POSTS_FAILED,
  SET_FAVORITES,
  SET_FAVORITE,
} from "./constants";

const INIT_STATE = {
  loading: false,
  loadMoreLoading: false,
  error: null,
  data: [],
  myPosts: [],
  posts: null,
  postTitle: [],
  ads: null,
  next: null,
  city: [],
  resume: [],
  resumeDetails: [],
  education: [],
  favorites: []
};

const Category = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, loading: true };
    case GET_CATEGORY_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_CATEGORY_FAILED:
      return { ...state, error: action.payload, loading: false };
    case GET_POSTS:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }; //[...state.posts, ...action.payload]
    case GET_POSTS_FAILED:
      return { ...state, error: action.payload, loading: false };
    case GET_ADS_DETAILS:
      return { ...state, loading: true };
    case GET_ADS_DETAILS_SUCCESS:
      return { ...state, ads: action.payload, loading: false };
    case GET_ADS_DETAILS_FAILED:
      return { ...state, error: action.payload, loading: false };
    case LOAD_MORE:
      return { ...state, loading: true, loadMoreLoading: true };
    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.data],
        next: action.payload.next,
        loading: false,
        loadMoreLoading: false,
      };
    case LOAD_MORE_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loadMoreLoading: false,
      };
    case LIVE_SEARCH:
      return { ...state, loading: true };
    case LIVE_SEARCH_SUCCESS:
      return { ...state, postTitle: action.payload, loading: false };
    case LIVE_SEARCH_FAILED:
      return {
        ...state,
        postTitle: [],
        loading: false,
      };
    case GET_POST:
      return { ...state, loading: true };
    case POST_RECEIVED:
      return { ...state, loading: false, postDetails: action.payload.data };
    case POST_REQUEST_FAILED:
      return { ...state, loading: false, error: action.payload };
    case CREATE_POST:
      return { ...state, loading: true };
    case CREATE_POST_SUCCESS:
      return { ...state, loading: false };
    case CREATE_POST_FAILED:
      return { ...state, error: action.payload, loading: false };
    case GET_USER_POSTS:
      return { ...state, loading: true };
    case GET_USER_POSTS_SUCCESS:
      return { ...state, myPosts: action.payload, loading: false };
    case GET_SEARCHED_POSTS_FAILED:
      return { ...state, error: action.payload, loading: false };
    case UPDATE_POST:
      return { ...state, loading: true };
    case UPDATE_POST_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_POST_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_CITY:
      return { ...state, loading: true };
    case GET_CITY_SUCCESS:
      return { ...state, city: action.payload, loading: false };
    case GET_CITY_FAILED:
      return { ...state, error: action.payload, loading: false };
    case CREATE_RESUME:
      return { ...state, loading: true };
    case CREATE_RESUME_SUCCESS:
      return { ...state, loading: false };
    case CREATE_RESUME_FAILED:
      return { ...state, error: action.payload, loading: false };
    case GET_RESUME:
      return { ...state, loading: true };
    case GET_RESUME_SUCCESS:
      return { ...state, loading: false, resume: action.payload };
    case GET_RESUME_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_RESUME_DETAILS:
      return { ...state, loading: true };
    case GET_RESUME_DETAILS_SUCCESS:
      return { ...state, resumeDetails: action.payload, loading: false };
    case GET_RESUME_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeDetails: null,
      };
    case CREATE_EDUCATION_INFO:
      return { ...state, loading: true };
    case CREATE_EDUCATION_INFO_SUCCESS:
      return { ...state, loading: false };
    case CREATE_EDUCATION_INFO_FAILED:
      return { ...state, error: action.payload, loading: false };
    case GET_EDUCATION:
      return { ...state, loading: true };
    case GET_EDUCATION_SUCCESS:
      return { ...state, education: action.payload, loading: false };
    case GET_EDUCATION_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default Category;
