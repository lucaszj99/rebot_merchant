import axios from "axios";
import * as ActionType from "../ActionTypes";

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getPremiseData());
      dispatch({ type: ActionType.CLEAR_ERRORS });
      history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ActionType.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signupUser = (signupData, history) => (dispatch) => {
  axios
    .post("/signup", signupData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getPremiseData());
      dispatch({ type: ActionType.CLEAR_ERRORS });
      history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ActionType.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: ActionType.SET_UNAUTHENTICATED });
};

export const getPremiseData = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_USER });
  axios
    .get("/profile")
    .then((res) => {
      dispatch({
        type: ActionType.SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updatePremiseData = (profileData) => (dispatch) => {
  dispatch({ type: ActionType.LOADING_USER });
  axios
    .post("/profile", profileData)
    .then((res) => {
      dispatch({
        type: ActionType.SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
