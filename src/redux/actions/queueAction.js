import axios from "axios";
import * as ActionType from "../ActionTypes";

export const getPremiseQueue = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_QUEUES });
  axios
    .get("/queue")
    .then((res) => {
      dispatch({
        type: ActionType.SET_QUEUES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const removeFromQueue = (queueData) => (dispatch) => {
  dispatch({ type: ActionType.LOADING_QUEUES });
  axios
    .post("/remove_queue", queueData)
    .then((res) => {
      dispatch({
        type: ActionType.REMOVE_QUEUE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
