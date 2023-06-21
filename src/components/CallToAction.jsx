import React from "react";
import "../styles/callToAction.css";
import Carousel from "./carousel";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <>
      <div>
        <div className="card mx-auto p-2 firts-card">
          <img src="./images/tokyo.jpg" className="card-img" alt="citie" />
          <div className="card-body text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <h5 className="card-title">MyTinerary</h5>
            <p className="card-text">
              Find your perfect trip, designed by insiders who know and love
              their cities!.
            </p>
            <Link to="/cities" className="btn btn-secondary shadow-sm">
              Get started
            </Link>
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default CallToAction;
