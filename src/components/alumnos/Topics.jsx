import React from "react";
import { Link } from "react-router-dom";

const styles = {
  card: {
    backgroundColor: "#5D656C"
  },
  button: {
    color: "#94A4B3",
    border: "none"
  }
};

export default ({ topics, id, cursoId, history }) => (
  <div className="collapse" id={`a${id}`}>
    <div className="card card-body" style={styles.card}>
      {topics.length &&
        topics.map(topic => (
          <button
            key={topic.id}
            className="btn btn-outline-dark"
            type="button"
            onClick={() =>
              history.push(
                `/alumnos/cursos/comprados/${cursoId}/section/${id}/topic/${
                  topic.id
                }`
              )
            }
            style={styles.button}
          >
            {topic.name}
          </button>
        ))}
    </div>
  </div>
);
