import React from "react";
import '../styles/callToAction.css';
import Carousel from "./carousel";


function CallToAction() {
    return (
        <>
            <div>
                <div className="card mx-auto p-2">
                    <img src="./images/thinh-n.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h5 className="card-title">MyTinerary</h5>
                        <p className="card-text">Find your perfect trip, designed by insiders who know and love their cities!.</p>
                        <a href="#" className="btn btn-secondary shadow-sm">Get started</a>
                    </div>
                </div>
            </div>
            <h1 className="text-center lead">Popular Mytineraries</h1>
            <Carousel />
        </>
    )
}

export default CallToAction;