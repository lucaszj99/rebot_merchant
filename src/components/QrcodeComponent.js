import React from "react";
import { Loading } from "./LoadingComponent";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardDeck,
  CardImg,
  Button,
  CardFooter,
} from "reactstrap";
import Sidebar from "./SidebarComponent";
const Qrcode = (props) => {
  return (
    <div className="row">
      <Sidebar />
      <div className="col-10 p-5 content-bg">
        <div className="title">
          QR Code<hr className="border-dark"></hr>
        </div>
        <div className="overlay bg-light">
          <div className="row p-2 m-2 justify-content-center text-center">
            <CardDeck className="col-8">
              <Card className="content-bg">
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
                  <CardImg
                    className="px-5 py-2 border-dark border-width-2"
                    src="assets/images/qrcodesample.png"
                    alt="check in qrcode"
                  />
                  <CardText className="m-2">ReBOT Sdn Bhd</CardText>
                  <CardText className="textstyle">
                    Scan this QR Code when
                  </CardText>
                  <CardText>Check In</CardText>
                </CardBody>
                <CardFooter>
                  <Button color="primary">
                    <span className="fa fa-lg fa-print mr-2"></span>Print
                  </Button>
                </CardFooter>
              </Card>
              <Card className="content-bg ">
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
                  <CardImg
                    className="px-5 py-2 border-dark border-width-2"
                    src="assets/images/qrcodesample.png"
                    alt="check in qrcode"
                  />
                  <CardText className="m-2">ReBOT Sdn Bhd</CardText>
                  <CardText className="textstyle">
                    Scan this QR Code when
                  </CardText>
                  <CardText>Check Out</CardText>
                </CardBody>
                <CardFooter>
                  <Button color="primary">
                    <span className="fa fa-lg fa-print mr-2"></span>Print
                  </Button>
                </CardFooter>
              </Card>
            </CardDeck>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
