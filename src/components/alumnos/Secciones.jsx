import React from "react";
import TopicsAlumnosContainer from "../../containers/alumnos/TopicsAlumnosContainer";

const styles = {
  box: {
    marginBottom: "100px"
  },
  text: {
    width: "100%",
    display: "inline-block",
    color: "#94A4B3",
    textAlign: "center"
  },
  btn: {
    color: "#94A4B3",
    width: "98%",
    border: "none",
    textAlign: "center",
    height: "27px",
    marginBottom: "4px"
  }
};

export default ({ sections, cursoId, history }) => (
  <div style={styles.box}>
    {sections &&
      sections.length ?
      sections.map(sec => (
        <div key={sec.id}>
          <p style={styles.text}>
            {sec.name}
            <button
              className="btn btn-outline-dark"
              type="button"
              data-toggle="collapse"
              data-target={`#a${sec.id}`}
              aria-expanded="false"
              aria-controls={`a${sec.id}`}
              style={styles.btn}
            >
              ↓
            </button>
          </p>
          <TopicsAlumnosContainer
            sectionId={sec.id}
            cursoId={cursoId}
            history={history}
          />
        </div>
      )):
      <p>Este curso no tiene contenido</p>
      }
  </div>
);
