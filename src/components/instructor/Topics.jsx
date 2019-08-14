import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div>
    {props.topics && props.topics[0] ? (
      props.topics.map(topic => (
        <li
          key={topic.id}
          className="list-group-item"
          style={{
            height: "60px"
          }}
        >
          Topic: {topic.name}
          <button
            onClick={() => props.deleteButton(topic.id, props.secId)}
            type="button"
            className="btn btn-light"
            style={{ float: "right", marginBottom: "5px" }}
          >
            <i className="fas fa-trash-alt" />
          </button>
          <Link
            to={`/instructor/cursos/${props.courseId}/section/${
              props.secId
            }/topic/${topic.id}`}
          >
            <button
              type="button"
              className="btn btn-light"
              style={{
                float: "right",
                marginBottom: "5px",
                marginRight: "10px"
              }}
              onClick={() => {}}
            >
              <i className="fas fa-pencil-alt" />
            </button>
          </Link>
        </li>
      ))
    ) : (
      <div />
    )}
  </div>
);
