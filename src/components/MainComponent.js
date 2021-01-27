import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Dishdetail from "./DishdetailComponent";
import Contact from "./ContactComponent";
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

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    screams: null,
  };
};

const token = localStorage.FBIdtoken;
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
}

const mapDispatchToProps = (dispatch) => ({});

class Main extends Component {
  componentDidMount() {
    // axios
    //   .get("/screams")
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //       screams: res.data,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }

  render() {
    const HomePage = () => {
      return <Home history={this.props.history} />;
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            )}
          />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <AuthRoute exact path="/dashboard" component={() => <Dashboard />} />
          <Route exact path="/profile" component={Profile} />
          <AuthRoute exact path="/qrcode" component={() => <Qrcode />} />
          <AuthRoute exact path="/record" component={() => <Record />} />
          <AuthRoute exact path="/queue" component={() => <Queue />} />
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
