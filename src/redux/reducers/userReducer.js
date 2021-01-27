import * as ActionType from "../ActionTypes";

const initialState = {
  authenticated: false,
  loading: false,
  username: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case ActionType.SET_UNAUTHENTICATED:
      return initialState;
    case ActionType.SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case ActionType.LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
