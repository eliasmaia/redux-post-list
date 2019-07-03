const INITIAL_STATE = {
  all: [],
  selected: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'FETCH_POSTS':
      return { ...state, all: actions.payload.data };
    default:
      return state;
  }
};
