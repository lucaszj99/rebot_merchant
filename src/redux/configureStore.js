import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import thunk from "redux-thunk";
import { InitialFeedback } from "./reducers/forms";

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  user: userReducer,
  UI: uiReducer,
});
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
