import axios from "axios";
import * as ActionType from "../ActionTypes";

export const getPremiseRecord = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_RECORDS });
  axios
    .get("/record")
    .then((res) => {
      dispatch({
        type: ActionType.SET_RECORDS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getPremiseTodayRecordSum = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_RECORDS });
  axios
    .get("/todayrecord")
    .then((res) => {
      dispatch({
        type: ActionType.SET_TODAYRECORDS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
