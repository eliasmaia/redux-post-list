export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_POSTS':
      return { ...state, posts: actions.payload.data };
    default:
      return state;
  }
};
