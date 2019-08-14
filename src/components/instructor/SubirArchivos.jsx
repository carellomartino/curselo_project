import React from "react";
import { Link } from "react-router-dom";

const style = {
  marginLeft: "30%"
};
const style2 = {
  marginTop: "4%",
  marginLeft: "10%",
  marginRight: "10%"
};
const style3 = {
  marginLeft: "10%",
  marginRight: "10%"
};
const button = {
  border: "none"
};
const loader = {
  marginLeft: "45%"
};

export default ({
  handleUpload,
  handleSetFile,
  handleChange,
  load,
  courseId,
  sectionId
}) => (
  <div style={style}>
    <div
      className="modal fade"
      id="modalContactForm1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Upload PDF</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleUpload}>
            <div className="md-form mb-5" style={style2}>
              <label htmlFor="icon">Topic name</label>
              <input
                id="form32"
                placeholder="Topic name"
                className="form-control validate"
                type="text"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="md-form mb-5" style={style3}>
              <label htmlFor="icon">PDF File</label>
              <input
                id="form32"
                className="form-control validate"
                type="file"
                name="pdf"
                accept=".pdf"
                style={button}
                onChange={handleSetFile}
              />
            </div>
            {!load && (
              <div
                style={loader}
                className="spinner-border text-info"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="submit"
                id="buttonToggler"
                className="btn btn-unique"
                data-toggle="modal"
                data-target="#modalContactForm1"
              >
                Upload PDF <i className="fas fa-paper-plane-o ml-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
