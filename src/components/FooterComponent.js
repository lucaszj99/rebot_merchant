import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-4 col-sm-2 text-light">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5 text-light">
            <h5>Contact Us</h5>
            <address>
              <i className="fa fa-phone fa-lg"></i>: +6018 3710 781
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:1171100363@student.mmu.edu.my">
                11700363@student.mmu.edu.my
              </a>
            </address>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-auto">
            <p>© Copyright 2020 ReBOT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
