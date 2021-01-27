import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userAction";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      email: "",
      password: "",
      loading: false,
      errors: {},
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(loginData, this.props.history);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { errors } = this.state;
    const {
      UI: { loading },
    } = this.props;
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                with="41"
                alt="ReBOT Logo"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
                <NavItem>
                  <Button
                    onClick={this.toggleModal}
                    className="text-light"
                    color="link"
                  >
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron className="jumbotron-header m-0">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 m-5">
                <h1>ReBOT: Real-Time Occupancy Business Tracker</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} className="login-header px-5">
            <span className="px-3 h3">Login</span>
          </ModalHeader>
          <ModalBody>
            <Form noValidate onSubmit={this.handleLogin} className="px-5">
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  innerRef={(input) => (this.username = input)}
                />
                {errors.email && (
                  <small className="error">{errors.email}</small>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  innerRef={(input) => (this.password = input)}
                />
                {errors.password && (
                  <small className="error">{errors.password}</small>
                )}
              </FormGroup>
              {errors.general && (
                <FormGroup>
                  <small className="error">{errors.general}</small>
                </FormGroup>
              )}
              <Button
                type="submit"
                value="submit"
                color="primary"
                className="col-12"
                to="/dashboard"
                disabled={loading}
              >
                Login {loading && <Loading />}
              </Button>
              <FormGroup className="text-center">
                New to ReBOT? <Link to="/register">Sign Up</Link>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionToProps)(Header);
