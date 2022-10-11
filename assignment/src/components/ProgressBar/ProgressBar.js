import React, { Component } from "react";
// icon
import { IoCheckmarkOutline } from "react-icons/io5";
// styles
import "./ProgressBar.css";

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { step: props.checkoutStep };
  }
  render() {
    return (
      <div>
        <div className="progressBar">
          <div className="left-section">
            <div className="left-empty-line"></div>
          </div>
          <div className="circle-wrapper">
            <div className="circle" style={{ backgroundColor: "#f26323" }}>
              {this.state.step === "SHIPPING_STEP" ? (
                <p>1</p>
              ) : (
                <IoCheckmarkOutline
                  style={{ color: "white", fontSize: "20px", marginTop: "7px" }}
                />
              )}
            </div>
            <div className="circle-exp">
              <p>Shipping</p>
            </div>
          </div>
          <div className="middle-section">
            <div
              className="middle-empty-line"
              style={{
                backgroundColor:
                  this.state.step === "SHIPPING_STEP" ? "#dbdbdb" : "#f26323",
              }}
            ></div>
          </div>
          <div className="circle-wrapper">
            <div
              className="circle"
              style={{
                backgroundColor:
                  this.state.step === "SHIPPING_STEP" ? "#dbdbdb" : "#f26323",
              }}
            >
              {this.state.step !== "DETAILS_STEP" ? (
                <p>2</p>
              ) : (
                <IoCheckmarkOutline
                  style={{ color: "white", fontSize: "20px", marginTop: "7px" }}
                />
              )}
            </div>
            <div className="circle-exp">
              <p
                style={{
                  color:
                    this.state.step === "SHIPPING_STEP" ? "#dbdbdb" : "black",
                }}
              >
                Review & Payments
              </p>
            </div>
          </div>
          <div className="right-section">
            <div
              className="right-empty-line"
              style={{
                backgroundColor:
                  this.state.step === "DETAILS_STEP" ? "#f26323" : "#dbdbdb",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
