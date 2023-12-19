const inistialstate = {
    data: [],
    loading: false,
    error: null,
    imageUrl: '',
  };
  const reducer = (state = inistialstate, action) => {
      switch (action.type) {
          case "ADD_USER_REQUEST":
            return {
              ...state,
              loading: true
            };
            break;
          case "ADD_USER_SUCCESS":
            return {
              ...state,
              loading: false,
              data: action.payload
            };
            break;
          case "ADD_USER_FAILURE":
            return {
              ...state,
              loading: false,
              error: action.payload
            };
            break;
      default:
        return state;
    }
  }
  
  
  export default reducer