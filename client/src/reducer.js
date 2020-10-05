export default function reducer(state, { type, payload }) { // destructured from action.type and action.payload 
  switch(type) {
    case "LOGIN_USER":
      return {
        ...state, 
        currentUser: payload
      };
    case "IS_LOGGED_IN": 
      return {
        ...state,
        isAuth: payload
      };
    default: 
      return state;
  }
}