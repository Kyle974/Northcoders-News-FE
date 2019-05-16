import Axios from 'axios';

const api = 'https://ncn2019.herokuapp.com/api/';

export const fetchArticles = (path) => {
  return Axios.get(`${api}articles/${path}`);
};

export const fetchComments = (articleID) => {
  return Axios.get(`${api}articles/${articleID}/comments`);
};

export const postComment = (articleID, username, commentInput) => {
  return Axios.post(`${api}articles/${articleID}/comments`, {
    author: username,
    body: commentInput
  });
};

export const deleteComment = (commentID) => {
  return Axios.delete(`${api}/comments/${commentID}`);
};

export const patchVotes = (path, vote) => {
  return Axios.patch(`${api}${path}`, {
    inc_votes: vote
  });
};

export const fetchUser = (username) => {
  return Axios.get(`${api}users/${username}`);
};
