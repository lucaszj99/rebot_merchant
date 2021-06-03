import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  updatePremiseData,
  getPremiseData,
  uploadImage,
} from "../redux/actions/userAction";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  Label,
  Input,
  Col,
} from "reactstrap";
import Sidebar from "./SidebarComponent";
import { connect } from "react-redux";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      email: "",
      password: "",
      confirmPassword: "",
      username: this.props.username,
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
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    this.props.getPremiseData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  handleUpdateProfile = (event) => {
    event.preventDefault();
    const profileData = {
      email: this.state.email,
      password: this.state.password,
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
    this.props.updatePremiseData(profileData);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    this.props.getPremiseData();
  };

  handleEdit = () => {
    this.setState({
      username: this.props.user.username,
      email: this.props.user.email,
      occupancyLimit: this.props.user.occupancyLimit,
      state: this.props.user.state,
      contact: this.props.user.contact,
      address: this.props.user.address,
      operationStart: this.props.user.operationStart,
      operationEnd: this.props.user.operationEnd,
      description: this.props.user.description,
      city: this.props.user.city,
      postcode: this.props.user.postcode,
    });
  };

  handleWrap = () => {
    this.toggleModal();
    this.handleEdit();
  };

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  render() {
    const {
      user: {
        premiseName,
        username,
        imageUrl,
        email,
        occupancyLimit,
        postcode,
        description,
        state,
        city,
        loading,
        operationStart,
        operationEnd,
        address,
        contact,
      },
    } = this.props;
    let profileMarkUp = (
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 content-bg">
          <div className="title">
            Profile<hr className="border-dark"></hr>
          </div>
          <div className="overlay bg-light">
            <div className="row p-2 m-2">
              <div className="col-8 headerstyle p-2 mb-2">{premiseName}</div>
              <div className="col-4 p-2 mb-2">
                <Button color="primary" onClick={this.handleWrap}>
                  <span className="fa fa-edit fa-lg mr-2"></span>Edit
                </Button>
              </div>
              <div className="col-12 headerstyle p-2 mb-2">
                <img src={imageUrl} height="600" width="80%" alt="profile" />
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={this.handleImageChange}
                />

                <div className="col">
                  <Button onClick={this.handleEditPicture} className="button">
                    <span className="fa fa-edit fa-lg mr-2"></span>Upload Image
                  </Button>
                </div>
              </div>
              <div className="col-3 labelstyle p-2">Username</div>
              <div className="col-9 textstyle p-2">{username}</div>
              <div className="col-3 labelstyle p-2">Email</div>
              <div className="col-9 textstyle p-2">{email}</div>
              <div className="col-3 labelstyle p-2">Contact</div>
              <div className="col-9 textstyle p-2">{contact}</div>
              <div className="col-3 labelstyle p-2">Address</div>
              <div className="col-9 textstyle p-2">{address}</div>
              <div className="col-3 labelstyle p-2">Postcode</div>
              <div className="col-9 textstyle p-2">{postcode}</div>
              <div className="col-3 labelstyle p-2">City</div>
              <div className="col-9 textstyle p-2">{city}</div>
              <div className="col-3 labelstyle p-2">State</div>
              <div className="col-9 textstyle p-2">{state}</div>
              <div className="col-3 labelstyle p-2">Operation Hour</div>
              <div className="col-9 textstyle p-2">
                {operationStart} -{operationEnd}
              </div>
              <div className="col-3 labelstyle p-2">Occupancy Limit</div>
              <div className="col-9 textstyle p-2">{occupancyLimit}</div>
              <div className="col-3 labelstyle p-2">Description</div>
              <div className="col-9 textstyle p-2">{description}</div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Edit Profile</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="accUsername" sm={2}>
                  Username
                </Label>
                <Col sm={10}>
                  <Input
                    readOnly
                    type="text"
                    name="username"
                    id="accUsername"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    readOnly
                    type="email"
                    name="email"
                    id="accEmail"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accContact" sm={2}>
                  Contact
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="contact"
                    id="accContact"
                    value={this.state.contact}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accAddress" sm={2}>
                  Address
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="address"
                    id="accAddress"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accPostcode" sm={2}>
                  Postcode
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="postcode"
                    id="accPostcode"
                    value={this.state.postcode}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accCity" sm={2}>
                  City
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="city"
                    id="accCity"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accState" sm={2}>
                  State
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="state"
                    id="accState"
                    value={this.state.state}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accOperationHour" sm={2}>
                  Operation Hour
                </Label>
                <Col sm={4}>
                  <Input
                    type="time"
                    name="state"
                    id="accOperationHour"
                    value={this.state.operationStart}
                    onChange={this.handleChange}
                  />
                </Col>
                -
                <Col sm={4}>
                  <Input
                    type="time"
                    name="state"
                    id="accOperationHour"
                    value={this.state.operationEnd}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accOccupancy" sm={2}>
                  Occupancy Limit
                </Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="occupancyLimit"
                    id="accOccupancy"
                    value={this.state.occupancyLimit}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accDescription" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="description"
                    id="accDescription"
                    value={this.state.description}
                    onChange={this.handleChange}
                    rows="4"
                  />
                </Col>
                <Col sm={{ size: 10, offset: 2 }} className="mt-2">
                  <Button onClick={this.handleUpdateProfile}>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
    return loading !== true ? profileMarkUp : <p>Loading</p>;
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapActionToProps = {
  updatePremiseData,
  getPremiseData,
  uploadImage,
};
export default connect(mapStateToProps, mapActionToProps)(Profile);
