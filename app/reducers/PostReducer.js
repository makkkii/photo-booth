import { POST_FETCH_ALL, POST_LIKE, POST_DISLIKE, POST_ADD_COMMENT } from '../actions/types';

const INITIAL_STATE = {
  posts: []
};

const post = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_FETCH_ALL:
      return { ...state, posts: action.payload };
    case POST_LIKE:
      return { ...state, posts: action.payload };
    case POST_DISLIKE:
      return { ...state, posts: action.payload };
    case POST_ADD_COMMENT:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export default post;
