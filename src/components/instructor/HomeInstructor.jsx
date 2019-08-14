import React from "react";
import { Link } from "react-router-dom";

const image = {
  backgroundImage:
    "url(" +
    "https://lh3.googleusercontent.com/JMLnCpPYwogPZqo3DZXs3b-n4KAQTJjCLIxs6emmrAd5oSiYBilYvvTOxfS4t4xKAEbVWgmHWwUT3GnDzKG533Y=w1351" +
    ")",
  marginRight: "-5%",
  marginTop: "-3%",
  height: "411px"
};
const margin = {
  marginRigth: "-5%"
};
const twoCards = {
  height: "200px",
  marginLeft: "1%"
};

export default () => (
  <div style={margin}>
    <div
      className="position-relative overflow-hidden text-center bg-light"
      style={image}
    >
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">
          Share your knowledge to your students.
        </h1>
        <p className="lead font-weight-normal">
          Create an online course and earn money by teaching it to students
          around the world.
        </p>
      </div>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
    <br />
    <div className="row mb-2" style={twoCards}>
      <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              Unleash your potential
            </strong>
            <h3 className="mb-0">Make Money</h3>
            <div className="mb-1 text-muted">Curselo</div>
            <p className="card-text mb-auto">
              Earn money every time a student buys your course. Charge monthly
              through PayPal or Payoneer, whichever you prefer.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">
              Visualize your success
            </strong>
            <h3 className="mb-0">Inspire the students</h3>
            <div className="mb-1 text-muted">Curselo </div>
            <p className="mb-auto">
              Help other people learn new skills, advance their careers and
              explore their hobbies by sharing your knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
