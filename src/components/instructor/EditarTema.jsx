import React from "react";
import SubirTextoContainer from "../../containers/instructor/SubirTextoContainer";
import SubirArchivosContainer from "../../containers/instructor/SubirArchivosContainer";
import SubirVideoContainer from "../../containers/instructor/SubirVideoContainer";

export default ({ courseId, sectionId, history, topicId, topic }) => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Edit Topic!</h1>
      <p className="lead">
        What do you want to change? (if only the name you can change it in any
        of them)
      </p>
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
    </div>
    <SubirTextoContainer
      courseId={courseId}
      sectionId={sectionId}
      history={history}
      topicId={topicId}
      topic={topic}
    />
    <SubirArchivosContainer
      courseId={courseId}
      sectionId={sectionId}
      history={history}
      topicId={topicId}
      topic={topic}
    />
    <SubirVideoContainer
      courseId={courseId}
      sectionId={sectionId}
      history={history}
      topicId={topicId}
      topic={topic}
    />
  </div>
);
