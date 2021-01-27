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
class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 content-bg">
          <div className="title">
            Queue<hr className="border-dark"></hr>
          </div>
          <div className="overlay bg-light">
            <div className="row p-2 m-2">
              <div className="col-8 headerstyle p-2">User in queue: 3</div>
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
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Lucas Wong</td>
                    <td>2020-40-05 17:38:25</td>
                    <td>
                      <Button color="danger" onClick={this.toggleModal}>
                        <span className="fa fa-times"></span>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Justin Ngu</td>
                    <td>2020-40-05 17:38:25</td>
                    <td>
                      <Button color="danger" onClick={this.toggleModal}>
                        <span className="fa fa-times"></span>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Kelvin Pang</td>
                    <td>2020-40-05 17:38:25</td>
                    <td>
                      <Button color="danger" onClick={this.toggleModal}>
                        <span className="fa fa-times"></span>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Modal
              isOpen={this.state.isModalOpen}
              toggle={this.toggleModal}
              className="modal-sm"
            >
              <ModalHeader toggle={this.toggleModal}>Remove User</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label>Remove User From Queue? </Label>
                  </FormGroup>
                  <Button
                    type="submit"
                    value="submit"
                    color="primary"
                    className="mx-2"
                  >
                    Yes
                  </Button>
                  <Button type="submit" value="submit" color="danger">
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

export default Queue;
