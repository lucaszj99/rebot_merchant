import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Jumbotron className="m-0 jumbotron-intro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col-8">
                  <h1>
                    <u>What is ReBOT?</u>
                  </h1>
                  <h5>
                    ReBOT - Real Time Business Occupancy Tracker is established
                    to apply occupancy tracking solutions during the Covid-19
                    Pandemic. Simple QR technology is applied for customers to
                    check in upon their visit.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Jumbotron className="m-0">
          <div className="container">
            <div className="row">
              <img
                src="assets/images/objectiveimg.jpg"
                alt="objective background"
                className="col-4"
              />
              <div className="col-8">
                <h1>
                  <u>Objective</u>
                </h1>
                <h5>
                  <ul>
                    <li>
                      Incorporate occupancy tracking to public health
                      application
                    </li>
                    <li>Protect premise owners and customers</li>
                    <li>
                      Assist on contact tracing and practice social distancing
                    </li>
                  </ul>
                </h5>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}
export default Home;
