const initialState = {
  repos: false,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REPOS_REQUEST':
      return { ...state, repos: false, loading: true, error: false };
    case 'GET_REPOS_SUCCESS':
      return { ...state, repos: action.payload, loading: false, error: false };
    case 'GET_REPOS_FAILURE':
      return { ...state, repos: false, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
