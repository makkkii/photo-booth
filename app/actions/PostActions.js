import { POST_FETCH_ALL, POST_LIKE, POST_DISLIKE, POST_ADD_COMMENT, POST_SELECT_IMAGE, POST_ADD } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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

// Add a comment.

export const sendMessage = (post, comments, newcomment) => {
  const { currentUser } = firebase.auth();
  const newComments = comments + 1;

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/posts/${post}/`)
      .update({
        comments_number: newComments
      })
      .then(() => {
        firebase
          .database()
          .ref(`/users/${currentUser.uid}/posts/${post}/comments/`)
          .push({
            username: 'Shadab',
            message: newcomment
          });
      })
      .then(() => {
        dispatch({ type: POST_ADD_COMMENT });
      });
  };
};

export const selectImage = url => ({
  type: POST_SELECT_IMAGE,
  payload: url
});

export const addPost = (image, location, description) => {
  const { currentUser } = firebase.auth();
  const date = new Date().toLocaleString();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/`)
      .child('posts')
      .push({
        username: 'Shadab',
        userpic: 'https://pbs.twimg.com/profile_images/1022507144074211330/PjsjV1yr_400x400.jpg',
        date: date,
        image: image,
        title: description,
        likes: 0,
        comments_number: 0,
        location: location,
        liked: false
      })
      .then(() => {
        dispatch({ type: POST_ADD });
        Actions.reset('app');
      });
  };
};

