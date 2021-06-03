import React, { Component } from "react";
import PropTypes from "prop-types";
import Sidebar from "./SidebarComponent";
import { getPremiseRecord } from "../redux/actions/recordAction";
import { connect } from "react-redux";
class Record extends Component {
  componentDidMount() {
    this.props.getPremiseRecord();
  }
  render() {
    const { records, loading } = this.props.records;
    let RecordList = !loading ? (
      records.map((record, index) => (
        <tr key={record.id}>
          <th scope="row">{index + 1}</th>
          <td>{record.checkInUser}</td>
          <td>{record.contact}</td>
          <td>{record.enteredAt}</td>
        </tr>
      ))
    ) : (
      <p>Loading</p>
    );
    return (
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 content-bg">
          <div className="title">
            Record<hr className="border-dark"></hr>
          </div>
          <div className="overlay bg-light">
            <div className="row p-2 m-2">
              <div className="col-4 p-2"></div>
            </div>
            <div className="row p-2 m-2">
              <table className="table m-2 p-2 text-center">
                <thead className="labelstyle">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Visit Time</th>
                  </tr>
                </thead>
                <tbody>{RecordList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  records: state.records,
});

Record.propTypes = {
  user: PropTypes.object.isRequired,
  records: PropTypes.object.isRequired,
};
const mapActionToProps = {
  getPremiseRecord,
};
export default connect(mapStateToProps, mapActionToProps)(Record);
