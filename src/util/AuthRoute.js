import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/home" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

AuthRoute.propTypes = {
  user: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(AuthRoute);
