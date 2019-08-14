import React from "react";
import { Link } from "react-router-dom";

const style = {
  marginLeft: "30%"
};

export default ({ handleSubmit, handleChange, courseId, sectionId }) => (
  <div style={style}>
    <div
      className="modal fade"
      id="modalContactForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Upload Text</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="md-form mb-5" style={{ marginTop: "4%" }}>
              <input
                name="name"
                type="text"
                id="form32"
                placeholder="Topic name"
                className="form-control validate"
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "-5%" }}>
              <textarea
                name="text"
                type="text"
                placeholder="Topic content"
                id="message-text"
                className="form-control md-textarea"
                rows="9"
                onChange={handleChange}
              />
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-unique"
                data-toggle="modal"
                data-target="#modalContactForm"
              >
                Send <i className="fas fa-paper-plane-o ml-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
