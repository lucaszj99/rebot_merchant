import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardDeck } from "reactstrap";
import { FadeTransform } from "react-animation-components";
import Sidebar from "./SidebarComponent";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPremiseQueue } from "../redux/actions/queueAction";
import { getPremiseTodayRecordSum } from "../redux/actions/recordAction";
import { getPremiseData } from "../redux/actions/userAction";

class Dashboard extends Component {
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
      queueList: [],
      occupancyLimit: 0,
      operationStart: "",
      operationEnd: "",
      description: "",
      errors: {},
      todayRecordSize: null,
    };
  }
  componentDidMount() {
    this.props.getPremiseData();
    this.props.getPremiseQueue();
    this.props.getPremiseTodayRecordSum();
    this.setState({
      queueList: this.props.queues.queueRecord,
      todayRecordSize: this.props.records.size,
    });
  }

  render() {
    const {
      user: { occupancyLimit, currentOccupancy },
      queues,
      records,
    } = this.props;
    return (
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 content-bg">
          <div className="title">
            Dashboard<hr className="border-dark"></hr>
          </div>
          <div className="d-inline">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-50%)",
              }}
            >
              <CardDeck>
                <Card className="col-3 m-2">
                  <CardBody>
                    <CardTitle>Occupancy</CardTitle>
                    <CardText>
                      {currentOccupancy}/{occupancyLimit}
                    </CardText>
                  </CardBody>
                </Card>
                <Card className="col-3 m-2">
                  <CardBody>
                    <CardTitle>Queue</CardTitle>
                    <CardText>{queues.queueCount}</CardText>
                  </CardBody>
                </Card>
              </CardDeck>
              <Card className="col-6 m-2">
                <CardBody>
                  <CardTitle>Number of visits today</CardTitle>
                  <CardText>{records.size}</CardText>
                </CardBody>
              </Card>
            </FadeTransform>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
  queues: state.queues,
  records: state.records,
});

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  queues: PropTypes.object.isRequired,
};
const mapActionToProps = {
  getPremiseQueue,
  getPremiseTodayRecordSum,
  getPremiseData,
};
export default connect(mapStateToProps, mapActionToProps)(Dashboard);
