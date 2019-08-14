import React from "react";
import { Link } from "react-router-dom";
import SubirTextoContainer from "../../containers/instructor/SubirTextoContainer";
import SubirArchivosContainer from "../../containers/instructor/SubirArchivosContainer";
import SubirVideoContainer from "../../containers/instructor/SubirVideoContainer";

export default ({ courseId, sectionId, history }) => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">New Topic!</h1>
      <p className="lead">What do you want to share?</p>
    </div>

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <button
            type="button"
            className="btn btn-lg btn-block btn-primary"
            data-toggle="modal"
            data-target="#modalContactForm"
          >
            Upload text!
          </button>
        </div>

        <div className="card mb-4 shadow-sm">
          <button
            type="button"
            className="btn btn-lg btn-block btn-primary"
            data-toggle="modal"
            data-target="#modalContactForm1"
          >
            Upload PDF!
          </button>
        </div>

        <div className="card mb-4 shadow-sm">
          <button
            type="button"
            className="btn btn-lg btn-block btn-primary"
            data-toggle="modal"
            data-target="#modalContactForm2"
          >
            Upload a video!
          </button>
        </div>
      </div>
      <Link to={`/instructor/cursos/${courseId}`}>
        <div>
          <button type="button" className="btn btn-primary">
            Back to Course
          </button>
        </div>
      </Link>
    </div>

    <SubirTextoContainer
      courseId={courseId}
      sectionId={sectionId}
      history={history}
    />
    <SubirArchivosContainer
      courseId={courseId}
      sectionId={sectionId}
      history={history}
    />
    <SubirVideoContainer
      courseId={courseId}
      sectionId={sectionId}
      history={history}
    />
  </div>
);
