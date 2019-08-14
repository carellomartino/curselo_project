import React from "react";

const styles = {
  text: {
    color: "black"
  }
};
export default ({ handleSignIn, handleChange }) => (
  <div>
    <div
      className="modal fade"
      id="darkModalForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog form-dark" role="document">
        <div className="modal-content card card-image">
          <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div className="modal-header text-center pb-4">
              <h3
                className="modal-title w-100 white-text font-weight-bold"
                id="myModalLabel"
              >
                <strong style={styles.text}>SIGN</strong>{" "}
                <a className="green-text font-weight-bold">
                  <strong style={styles.text}> UP</strong>
                </a>
              </h3>
              <button
                type="button"
                className="close white-text"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="" onSubmit={handleSignIn}>
              <div className="modal-body">
                <label
                  data-error="wrong"
                  data-success="right"
                  style={styles.text}
                >
                  Email
                </label>
                <div className="md-form mb-5">
                  <input
                    name="email"
                    type="email"
                    id="Form-email5"
                    className="form-control validate white-text"
                    onChange={handleChange}
                  />
                </div>

                <div className="md-form pb-3">
                  <label
                    data-error="wrong"
                    data-success="right"
                    style={styles.text}
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="Form-pass5"
                    className="form-control validate white-text"
                    onChange={handleChange}
                  />
                  <div className="form-group mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox624"
                    />
                    <label className="white-text form-check-label">
                      Accept the
                      <a href="#" className="green-text font-weight-bold">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <div className="row d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <button
                      type="submit"
                      className="btn btn-success btn-block btn-rounded z-depth-1"
                      data-toggle="modal"
                      data-target="#darkModalForm"
                    >
                      Sign up
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <p className="font-small white-text d-flex justify-content-end">
                      Have an account?{" "}
                      <a href="#" className="green-text ml-1 font-weight-bold">
                        Log in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
