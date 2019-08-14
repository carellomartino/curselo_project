import React from "react";
import SeccionesAlumnoContainer from "../../containers/alumnos/SeccionesAlumnoContainer";

const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    position: "fixed",
  },
  sidebar: {
    overflowY: "scroll",
    marginTop: "81px",
    width: "260px",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    zIndex: "999",
    background: "#1F2931",
    color: "#94A4B3",
    transition: "all 0.3s"
  },
  text: {
    color: "#94A4B3",
    margin: "10px"
  }
};

export default props => (
  <div style={styles.wrapper}>
    <nav id="sidebar" style={styles.sidebar}>
      <div>
        <div>
          <center>
            <h4 style={styles.text}>Secciones:</h4>
          </center>
        </div>
        <br />
        <SeccionesAlumnoContainer
          cursoId={props.cursoId}
          history={props.history}
        />
      </div>
    </nav>
  </div>
);
