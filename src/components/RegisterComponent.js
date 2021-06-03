import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userAction";

import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Col,
  NavbarBrand,
} from "reactstrap";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      premiseName: "",
      contact: "",
      address: "",
      postcode: "",
      city: "",
      state: "",
      occupancyLimit: 0,
      operationStart: "",
      operationEnd: "",
      description: "",
      errors: {},
    };
    this.handleSignup = this.handleSignup.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSignup = (event) => {
    event.preventDefault();
    const signupData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username,
      premiseName: this.state.premiseName,
      contact: this.state.contact,
      address: this.state.address,
      postcode: this.state.postcode,
      city: this.state.city,
      state: this.state.state,
      occupancyLimit: this.state.occupancyLimit,
      operationStart: this.state.operationStart,
      operationEnd: this.state.operationEnd,
      description: this.state.description,
    };
    this.props.signupUser(signupData, this.props.history);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <div className="col-12 pl-5 navbar-dark">
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="ReBOT Logo"
            />
          </NavbarBrand>
        </div>
        <div className="col-12 p-5 content-bg">
          <div className="row bg-light">
            <img
              src="assets/images/scanqr.jpg"
              alt="RegisterPic"
              className="col-6 px-0"
            />
            <div className="col-6 p-3">
              <Form onSubmit={this.handleSignup}>
                <FormGroup row>
                  <Label for="accUsername" sm={3}>
                    Username
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="username"
                      id="accUsername"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Col>
                  {errors.username && (
                    <small className="error">{errors.username}</small>
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="accPassword" sm={3}>
                    Password
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="password"
                      name="password"
                      id="accPassword"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Col>
                  {errors.password && (
                    <small className="error">{errors.password}</small>
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="accRepassword" sm={3}>
                    Comfirm Password
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="accRepassword"
                      placeholder="Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                    {errors.confirmPassword && (
                      <small className="error">{errors.confirmPassword}</small>
                    )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="premiseName" sm={3}>
                    Premise Name
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="premiseName"
                      id="premiseName"
                      placeholder="Premise Name"
                      value={this.state.premiseName}
                      onChange={this.handleChange}
                    />
                  </Col>
                  {errors.premiseName && (
                    <small className="error">{errors.premiseName}</small>
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="accEmail" sm={3}>
                    Email
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="email"
                      name="email"
                      id="accEmail"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Col>
                  {errors.email && (
                    <small className="error">{errors.email}</small>
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="accContact" sm={3}>
                    Contact
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="contact"
                      id="accContact"
                      placeholder="contact"
                      value={this.state.contact}
                      onChange={this.handleChange}
                    />
                  </Col>
                  {errors.contact && (
                    <small className="error">{errors.contact}</small>
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="accAddress" sm={3}>
                    Address
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="textarea"
                      name="address"
                      id="accAdress"
                      placeholder="Unit No,Street"
                      rows="2"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                    {errors.address && (
                      <small className="error">{errors.address}</small>
                    )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="accPostcode" sm={3}>
                    Postcode
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="postcode"
                      id="accPostcode"
                      placeholder="postcode"
                      value={this.state.postcode}
                      onChange={this.handleChange}
                    />
                    {errors.postcode && (
                      <small className="error">{errors.postcode}</small>
                    )}
                  </Col>
                  <Label for="accCity" sm={2}>
                    City
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="city"
                      id="accCity"
                      placeholder="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                    {errors.city && (
                      <small className="error">{errors.city}</small>
                    )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="accState" sm={3}>
                    State
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="state"
                      id="accState"
                      placeholder="state"
                      value={this.state.state}
                      onChange={this.handleChange}
                    />
                    {errors.state && (
                      <small className="error">{errors.state}</small>
                    )}
                  </Col>
                  <Label for="accOccupancy" sm={2}>
                    Occupancy Limit
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="number"
                      name="occupancyLimit"
                      id="accOccupancy"
                      placeholder="0"
                      value={this.state.occupancyLimit}
                      onChange={this.handleChange}
                    />
                    {errors.occupancyLimit && (
                      <small className="error">{errors.occupancyLimit}</small>
                    )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="accOperationHourStart" sm={3}>
                    Operation Hour
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="time"
                      name="operationStart"
                      id="accOperationHourStart"
                      value={this.state.operationStart}
                      onChange={this.handleChange}
                    />
                    {errors.operationStart && (
                      <small className="error">{errors.operationStart}</small>
                    )}
                  </Col>
                  <Label for="accOperationHourEnd" sm={1}>
                    Until
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="time"
                      name="operationEnd"
                      id="accOperationHourEnd"
                      value={this.state.operationEnd}
                      onChange={this.handleChange}
                    />
                    {errors.operationEnd && (
                      <small className="error">{errors.operationEnd}</small>
                    )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="accDescription" sm={3}>
                    Description
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="textarea"
                      name="description"
                      id="accDescription"
                      placeholder="Description"
                      rows="4"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                    {errors.description && (
                      <small className="error">{errors.description}</small>
                    )}
                  </Col>
                  <Col sm={{ size: 10, offset: 6 }} className="mt-3">
                    <Button color="primary" type="submit">
                      Register
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  signupUser,
};
export default connect(mapStateToProps, mapActionToProps)(Register);
