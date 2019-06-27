import axios from 'axios';

//Coloque os action creators aqui

export const fetchPosts = () => {
  // fazer pedido HTTP para obter todos os posts
  const request = axios.get('https://jsonplaceholder.typicode.com/posts');

  return {
    type: 'FETCH_POSTS',
    payload: request
  };
};
