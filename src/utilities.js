import Axios from 'axios';

export const fetchArticles = (url) => {
  return Axios.get(`https://ncn2019.herokuapp.com/api/articles/${url}`);
};
