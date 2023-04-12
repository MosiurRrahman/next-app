import React from "react";
import { PieChart } from "react-minimal-pie-chart";
function ChooseUs1() {
  return (
    <div className="choose-us pt-120">
      <div className="container">
        <div className="row justify-content-center text-center mb-60">
          <div className="col-lg-10">
            <div className="section-title-one">
              <div className="section-subtitle d-flex justify-content-center">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Why Choose
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                Our <span>Experiences</span> On Era
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center gy-4">
          <div className="col-lg-4 order-1 col-md-6">
            <div className="choose-us-single mb-30">
              <div className="icon">
                <img src="assets/images/icons/choose-icon1.svg" alt="" />
              </div>
              <div className="info">
                <h4>Client Satisfaction.</h4>
                <p>Various versions have evolved over the years.</p>
              </div>
            </div>
            <div className="choose-us-single">
              <div className="icon">
                <img src="assets/images/icons/choose-icon2.svg" alt="" />
              </div>
              <div className="info">
                <h4>Experinece Team.</h4>
                <p>Various versions have evolved over the years.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-2 order-3 text-center">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
                { title: "Three", value: 20, color: "red" },
              ]}
            />
            {/* <ul className="pie-chart m-0 p-0">
              <li className="visualize" data-value={1}>
                Winter
              </li>
              <li className="visualize" data-value={2}>
                Summer
              </li>
              <li className="visualize" data-value={3}>
                Spring
              </li>
              <li className="visualize" data-value={4}>
                Fall
              </li>
            </ul> */}
          </div>
          <div className="col-lg-4 order-lg-3 order-2 col-md-6">
            <div className="choose-us-single mb-30">
              <div className="icon">
                <img src="assets/images/icons/choose-icon3.svg" alt="" />
              </div>
              <div className="info">
                <h4>On-time &amp; Budget</h4>
                <p>Various versions have evolved over the years.</p>
              </div>
            </div>
            <div className="choose-us-single">
              <div className="icon">
                <img src="assets/images/icons/choose-icon4.svg" alt="" />
              </div>
              <div className="info">
                <h4>24/7 Support Team.</h4>
                <p>Various versions have evolved over the years.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs1;
