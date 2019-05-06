import { POST_FETCH_ALL, POST_LIKE, POST_DISLIKE } from './types';
import firebase from 'firebase';

export const fetchPosts = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/`)
      .child('posts')
      .on('value', snapshot => {
        if (snapshot.val() === null || snapshot.val() === undefined) {
          let arrayPosts = [];
          dispatch({ type: POST_FETCH_ALL, payload: arrayPosts });
        } else {
          dispatch({ type: POST_FETCH_ALL, payload: snapshot.val() });
        }
      });
  };
};

// Like a post.
export const like = (post, likes) => {
  const currentUser = firebase.auth();
  const newLikes = likes + 1;

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/posts/${post}/`)
      .update({
        likes: newLikes,
        liked: true
      })
      .then(() => {
        dispatch({ type: POST_LIKE });
      });
  };
};

// Dislike a post.
export const dislike = (post, likes) => {
  const { currentUser } = firebase.auth();
  const newLikes = likes - 1;

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/posts/${post}/`)
      .update({
        likes: newLikes,
        liked: false
      })
      .then(() => {
        dispatch({ type: POST_DISLIKE });
      });
  };
};

