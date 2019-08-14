import React from "react";
import { Link } from "react-router-dom";

const style = {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  },
  childs: {
    width: "18rem",
    marginTop: "1%",
    marginBottom: "1%"
  },
  linksColor: {
    color: "black",
    textDecoration: "none"
  },
  button: {
    marginLeft: "25%",
    marginRight: "25%",
    display: "block",
    marginTop: "20%"
  }
};

export default ({ searchCourses }) => {
  return (
    <div style={style.container}>
      {searchCourses ? (
        searchCourses.map(curso => (
          <div key={curso.id} className="card" style={style.childs}>
            <Link to={`/alumnos/cursos/${curso.id}`}>
              {curso.images ? (
                <img
                  alt=""
                  className="card-img-top"
                  src={curso.images.imagen1.url}
                />
              ) : (
                <img
                  alt=""
                  className="card-img-top"
                  src="https://www.grupomisol.com/wp-content/uploads/2014/11/no-imagen.jpg"
                />
              )}
            </Link>
            <div className="card-body">
              <Link to={`/alumnos/cursos/${curso.id}`}>
                <h5 style={style.linksColor} className="card-title">
                  {curso.name}
                </h5>
              </Link>
              <Link to={`/alumnos/cursos/${curso.id}`}>
                <p style={style.linksColor} className="card-text">
                  {curso.description.length > 120
                    ? curso.description.slice(0, 120) + "..."
                    : curso.description}
                </p>
              </Link>
              <Link to={`/alumnos/cursos/${curso.id}`}>
                <div style={style.button}>
                  <button className="btn btn-outline-dark">View Details</button>
                </div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay cursos relacionados con ese nombre...</p>
      )}
    </div>
  );
};
