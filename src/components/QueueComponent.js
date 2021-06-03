import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  Label,
} from "reactstrap";
import Sidebar from "./SidebarComponent";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPremiseQueue, removeFromQueue } from "../redux/actions/queueAction";
class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      queueList: [],
      posSelected: "",
      userSelected: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount() {
    this.props.getPremiseQueue();
    this.setState({
      queueList: this.props.queues.queueRecord,
    });
  }

  handleRemove(event) {
    event.preventDefault();
    const posData = {
      pos: this.state.posSelected,
    };
    this.props.removeFromQueue(posData);
    this.props.getPremiseQueue();
  }
  toggleModal(selectedQueue) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      posSelected: selectedQueue.pos,
      userSelected: selectedQueue.checkInUser,
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }
  render() {
    const { queues, loading, queueCount } = this.props.queues;
    let QueueList = !loading ? (
      queueCount !== 0 ? (
        queues.map((queue, index) => (
          <tr key={queue.id}>
            <th scope="row">{queue.pos}</th>
            <td>{queue.checkInUser}</td>
            <td>{queue.enteredAt}</td>
            <td>
              <Button color="danger" onClick={() => this.toggleModal(queue)}>
                <span className="fa fa-times"></span>
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No Record Found</td>
        </tr>
      )
    ) : (
      <p>Loading</p>
    );
    return (
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 content-bg">
          <div className="title">
            Queue<hr className="border-dark"></hr>
          </div>
          <div className="overlay bg-light">
            <div className="row p-2 m-2">
              <div className="col-8 headerstyle p-2">
                User in queue: {queueCount}
              </div>
              <div className="col-4 p-2"></div>
            </div>
            <div className="row p-2 m-2">
              <table className="table m-2 p-2 text-center">
                <thead className="labelstyle">
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Name</th>
                    <th scope="col">Entered Time</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{QueueList}</tbody>
              </table>
            </div>
            <Modal
              isOpen={this.state.isModalOpen}
              toggle={this.toggleModal}
              className="modal-sm"
            >
              <ModalHeader toggle={this.toggleModal}>Remove User</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleRemove}>
                  <FormGroup>
                    <Label>
                      Remove {this.state.userSelected} From Queue? Position:
                      {this.state.posSelected}
                    </Label>
                  </FormGroup>
                  <Button
                    type="submit"
                    value="submit"
                    onClick={this.closeModal}
                    color="primary"
                    className="mx-2"
                  >
                    Yes
                  </Button>
                  <Button onClick={this.closeModal} color="danger">
                    No
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  queues: state.queues,
});

Queue.propTypes = {
  user: PropTypes.object.isRequired,
  queues: PropTypes.object.isRequired,
};
const mapActionToProps = {
  getPremiseQueue,
  removeFromQueue,
};
export default connect(mapStateToProps, mapActionToProps)(Queue);
