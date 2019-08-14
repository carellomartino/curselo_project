import React from "react";
import { Link } from "react-router-dom";

const styles = {
  button: {
    display: "flex",
    justifyContent: "space-around"
  },
  inputDescription: {
    height: "200px"
  },
  title: {
    textAlign: "center"
  },
  cards: {
    borderStyle: "solid",
    borderColor: "#7CE2EF"
  },
  colorTitle: {
    backgroundColor: "#8BE3EF"
  },
  position: {
    marginTop: "2%",
    width: "70%"
  },
  loader: {
    marginLeft: "45%"
  },
  imagen: {
    display: "flex",
    justifyContent: "space-around"
  }
};

export default ({
  handleChange,
  handleSubmit,
  handleUploadImg,
  handleSetImg,
  imageUrl1,
  imageUrl2,
  loading
}) => (
  <div className="container" style={styles.position}>
    <form
      onSubmit={e => {
        handleSubmit(e);
        document
          .querySelectorAll(".form-control")
          .forEach(input => (input.value = ""));
      }}
    >
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Your Name: </div>
        <div className="card-body">
          <input
            required
            type="text"
            name="speakerInfo"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Course Title: </div>
        <div className="card-body">
          <input
            required
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Price: </div>
        <div className="card-body">
          <input
            required
            name="price"
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Description: </div>
        <div className="card-body">
          <input
            required
            type="text"
            name="description"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <button
          type="button"
          className="btn btn-lg btn-block btn-primary"
          data-toggle="modal"
          data-target="#modalContactForm1"
        >
          Upload image
        </button>
      </div>

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
              <h4 className="modal-title w-100 font-weight-bold">Upload Image</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="card bg mb-3" style={styles.cards}>
              <div className="card-header">
                Upload Images:
                <div className="card-body">
                  <input
                    style={styles.title}
                    className="btn"
                    name="myImage"
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={handleSetImg}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <button
                onClick={handleUploadImg}
                type="button"
                id="buttonToggler"
                className="btn btn-outline-info"
                data-toggle="modal"
                data-target="#modalContactForm1"
              >
                Upload Image <i className="fas fa-paper-plane-o ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.imagen}>
        Main Image:
        <div className="col-sm-3  main">
          {!loading ? (
            <div
              style={styles.loader}
              className="spinner-border text-info"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <img src={imageUrl1} width="100%" alt="" />
          )}
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <div style={styles.button}>
          <Link to="/instructor">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
          {imageUrl1 ? (
            <button type="submit" className="btn btn-primary">
              Create Course
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled>
              Create Course
            </button>
          )}
        </div>
      </div>
      <br />
      <br />
    </form>
    <br />
    <br />
    <br />
    <br />
  </div>
);
