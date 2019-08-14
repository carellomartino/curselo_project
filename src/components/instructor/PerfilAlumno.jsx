import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Cursos from "../alumnos/VerCursos";

export default () => (
  <div className="bg-white shadow rounded overflow-hidden">
    <div className="px-4 pt-0 pb-4 bg-dark">
      <div className="media align-items-end profile-header">
        <br />
        <div className="profile mr-3">
          <img
            src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
            alt="..."
            width="130"
            className="rounded mb-2 img-thumbnail"
          />
        </div>
        <div className="media-body mb-5 text-white">
          <h4 className="mt-0 mb-0">Name</h4>
          <p className="small mb-4">
            {" "}
            <i className="fa fa-map-marker mr-2" />
            Country{" "}
          </p>
        </div>
      </div>
    </div>

    <div className="py-4 px-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0">Courses</h5>
        <Cursos />
      </div>
    </div>
  </div>
);
