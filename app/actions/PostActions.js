import { POST_FETCH_ALL } from './types';
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

