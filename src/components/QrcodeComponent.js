import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import QRCode from "react-qr-code";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import Sidebar from "./SidebarComponent";
class Qrcode extends Component {
  render() {
    const {
      user: { username },
    } = this.props;
    return (
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 content-bg">
          <div className="title">
            QR Code<hr className="border-dark"></hr>
          </div>
          <div className="overlay bg-light">
            <div className="row p-2 m-2 justify-content-center text-center">
              <Card id="checkin" className="content-bg m-2">
                <CardBody>
                  <CardTitle>
                    <img
                      src="assets/images/logo.png"
                      height="60"
                      with="80"
                      alt="ReBOT Logo"
                      className="m-3"
                    />
                  </CardTitle>
                  <QRCode value={`checkin/${username}`} size={290} />
                  <CardText className="m-2">ReBOT Sdn Bhd</CardText>
                  <CardText className="textstyle">
                    Scan this QR Code when
                  </CardText>
                  <CardText>Check In</CardText>
                </CardBody>
              </Card>
              <Card className="content-bg m-2">
                <CardBody>
                  <CardTitle>
                    <img
                      src="assets/images/logo.png"
                      height="60"
                      with="80"
                      alt="ReBOT Logo"
                      className="m-3"
                    />
                  </CardTitle>

                  <QRCode value={`checkout/${username}`} size={290} />

                  <CardText className="m-2">ReBOT Sdn Bhd</CardText>
                  <CardText className="textstyle">
                    Scan this QR Code when
                  </CardText>
                  <CardText>Check Out</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="row p-2 m-2 justify-content-center text-center">
              <Button
                color="primary"
                onClick={() => {
                  window.print();
                }}
              >
                <span className="fa fa-lg fa-print mr-2"></span>Print
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Qrcode.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapActionToProps = {};
export default connect(mapStateToProps, mapActionToProps)(Qrcode);
