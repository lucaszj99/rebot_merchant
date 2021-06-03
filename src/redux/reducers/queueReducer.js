import * as ActionType from "../ActionTypes";

const initialState = {
  queue: [],
  queues: [],
  queueCount: null,
  loading: false,
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_QUEUES:
      return {
        ...state,
        loading: false,
        queues: action.payload.queueRecord,
        queueCount: action.payload.queueCount,
      };
    case ActionType.GET_QUEUE:
      return {
        ...state,
        loading: false,
        queue: action.payload,
      };
    case ActionType.REMOVE_QUEUE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case ActionType.LOADING_QUEUES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
