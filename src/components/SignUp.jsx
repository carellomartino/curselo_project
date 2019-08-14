import React from "react";
import { userInfo } from "os";

export default ({ handleChange, handleSignUp }) => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign Up</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <label data-error="wrong" data-success="right">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="orangeForm-email"
                    className="form-control validate"
                    onChange={handleChange}
                  />
                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text" />
                  <label data-error="wrong" data-success="right">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="orangeForm-pass"
                    className="form-control validate"
                    onChange={handleChange}
                    placeholder="more than 6 characters"
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-deep-orange"
                  type="submit"
                  data-toggle="modal"
                  data-target="#modalRegisterForm"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
