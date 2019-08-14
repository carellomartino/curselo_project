import React from "react";
import SectionTopicContainer from "../../containers/instructor/Section&TopicContainer";
import { Link } from "react-router-dom";

const styles = {
  button2: {
    display: "block",
    margin: "auto"
  },
  img: {
    marginTop: "-19%"
  },
  text: {
    fontSize: "24px",
    textAlign: "left"
  },
  title: {
    fontSize: "40px",
    textAlign: "left"
  },
  imagen: {
    marginTop: "20px",
    margin: "auto",
    textAlign: "right"
  },
  edit: {
    margin: "auto",
    display: "block",
    textAlign: "left",
    marginTop: "50px"
  },
  flex: {
    display: "flex",
    marginTop: "20px"
  }
};

export default props => (
  <div>
    <div className="jumbotron mt-3">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              {props.curso.name}
            </h5>
            <p className="card-text">{props.curso.description}</p>
          </div>
        </div>
      </div>
      <div>
        <img
          style={styles.img}
          src={props.curso.images && props.curso.images.imagen1.url}
          class="rounded float-right"
          alt="..."
        />
      </div>
    </div>

    {props.curso.name && (
      <div>
        <div className="media" style={styles.flex}>
          <div className="media-body">
            <p className="mt-0" style={styles.text}>
              <Link to={`/instructor/cursos/${props.curso.id}/edit`}>
                <button
                  type="button"
                  className="btn btn-light"
                  style={styles.edit}
                  onClick={() => {}}
                >
                  Edit this Course
                  <i className="fas fa-pencil-alt" />
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modalContactForm"
            style={styles.button2}
          >
            Add Section
          </button>
          <br />
        </div>
        <SectionTopicContainer cursoId={props.curso.id} />
      </div>
    )}
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
            <h4 className="modal-title w-100 font-weight-bold">Add Section</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <label htmlFor="">Section Name</label>
                <i className="fas fa-tag prefix grey-text" />
                <input
                  type="text"
                  id="form32"
                  className="form-control validate"
                  onChange={props.handleChange}
                />
              </div>
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
    <div className="container">
      <Link to={`/instructor/cursos`}>
        <div>
          <button type="button" className="btn btn-primary">
            Back to My Courses
          </button>
        </div>
      </Link>
    </div>
  </div>
);
