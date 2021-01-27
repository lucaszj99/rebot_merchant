import React from "react";
import { Loading } from "./LoadingComponent";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardDeck,
  } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";
import Sidebar from "./SidebarComponent";
function Dashboard(props){
    return (
        <div className="row">
    <Sidebar/>
    <div className="col-10 p-5 content-bg">
            <div className="title">Dashboard<hr className="border-dark"></hr></div>
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
                    <CardText>50/50</CardText>
                </CardBody>
                </Card>
                <Card className="col-3 m-2">
                <CardBody>
                    <CardTitle>Queue</CardTitle>
                    <CardText>3</CardText>
                </CardBody>
                </Card>
                </CardDeck>
                <Card className="col-6 m-2">
                <CardBody>
                    <CardTitle>Number of visits today</CardTitle>
                    <CardText>1460</CardText>
                </CardBody>
                </Card>
            </FadeTransform>
            </div>
    </div></div>);
}

export default Dashboard;