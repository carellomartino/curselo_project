import React from "react";
import { Link } from "react-router-dom";
import TopicsContainer from "../../containers/instructor/TopicsContainer";

const styles = {
  nav: {
    width: "80vw"
  },
  button: {
    float: "right"
  }
};

export default props => (
  <div>
    {props.secciones && props.secciones[0] ? (
      props.secciones.map((sec, i) => (
        <div className="card" key={sec.id} style={styles.nav}>
          <div className="card-header">
            Section: {sec.name}
            <button
              onClick={() => props.deleteButton(sec.id)}
              type="button"
              className="btn btn-light"
              style={{ float: "right" }}
            >
              <i className="fas fa-trash-alt" />
            </button>
            <Link
              to={`/instructor/cursos/${props.courseId}/section/${
                props.secciones[i].id
              }`}
            >
              <button
                type="button"
                className="btn btn-light"
                style={styles.button}
              >
                Add Topic
              </button>
            </Link>
          </div>

          <ul className="list-group list-group-flush">
            <TopicsContainer secId={sec.id} courseId={props.courseId} />
          </ul>
        </div>
      ))
    ) : (
      <div />
    )}
  </div>
);
