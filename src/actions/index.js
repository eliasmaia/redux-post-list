import axios from 'axios';

//Coloque os action creators aqui

export const fetchPosts = () => {
  // fazer pedido HTTP para obter todos os posts
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response);
    });

  //depois despachar action com os dados dos posts */
  return {
    type: 'FETCH_POSTS',
    payload:
  };
};
