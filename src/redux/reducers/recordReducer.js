import * as ActionType from "../ActionTypes";

const initialState = {
  records: [],
  loading: false,
  size: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_RECORDS:
      return {
        ...state,
        loading: false,
        records: action.payload,
      };
    case ActionType.SET_TODAYRECORDS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case ActionType.LOADING_RECORDS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
