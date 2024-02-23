import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
  } from '../actions/redditActions';
  
  const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const redditReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default redditReducer;
  