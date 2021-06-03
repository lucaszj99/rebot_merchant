import React, { Component } from "react";
import Home from "./HomeComponent";
import Dashboard from "./DashboardComponent";
import Profile from "./ProfileComponent";
import Qrcode from "./QrcodeComponent";
import Record from "./RecordComponent";
import Register from "./RegisterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { SET_AUTHENTICATED } from "../redux/ActionTypes";
import jwtDecode from "jwt-decode";
import { logoutUser, getPremiseData } from "../redux/actions/userAction";
import { connect } from "react-redux";
import Queue from "./QueueComponent";
import store from "../redux/configureStore";
import axios from "axios";
import AuthRoute from "../util/AuthRoute";

const token = localStorage.getItem("FBIdToken");
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/home";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getPremiseData());
  }
  console.log("run");
} else {
  console.log("checking fail");
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({});

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home history={this.props.history} />;
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <AuthRoute exact path="/dashboard" component={() => <Dashboard />} />
          <AuthRoute exact path="/profile" component={Profile} />
          <AuthRoute exact path="/qrcode" component={() => <Qrcode />} />
          <Route exact path="/record" component={() => <Record />} />
          <Route exact path="/queue" component={() => <Queue />} />
          <Route
            exact
            path="/register"
            component={() => <Register history={this.props.history} />}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
