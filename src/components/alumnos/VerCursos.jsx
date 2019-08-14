import React from "react";
import { Link } from "react-router-dom";

const style = {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    marginBottom:"50px"
  },
  childs: {
    width: "18rem",
    marginTop: "1%",
    marginBottom: "1%"
  },
  button: {
    marginLeft: "30%",
    marginRight: "25%",
    display: "block",
    marginTop: "20%"
  },
  img: {
    width: "100%",
    height: "200px",
    display: "block",
    margin: "auto",
    objectFit:"contain"
  },
  text: {
    fontSize: "26px",
    textAlign: "center",
    color: "black"
  },
  text2: {
    fontSize: "18px",
    color: "black"
  }
};
export default ({ cursos }) => (
  <div style={style.container}>
    {cursos ? (
      cursos.map(curso => (
        <div key={curso.id} className="card" style={style.childs}>
          <Link to={`/alumnos/cursos/${curso.id}`}>
            {curso.images ? (
              <img
                alt=""
                className="card-img-top"
                style={style.img}
                src={curso.images.imagen1 && curso.images.imagen1.url}
              />
            ) : (
              <img
                alt=""
                className="card-img-top"
                style={style.img}
                src="https://www.grupomisol.com/wp-content/uploads/2014/11/no-imagen.jpg"
              />
            )}
          </Link>
          <div className="card-body">
            <Link to={`/alumnos/cursos/${curso.id}`}>
              <h5 style={style.text} className="card-title">
                {curso.name}
              </h5>
            </Link>
            <Link to={`/alumnos/cursos/${curso.id}`}>
              <p style={style.text2} className="card-text">
                {curso.description.length > 120
                  ? curso.description.slice(0, 120) + "..."
                  : curso.description}
              </p>
            </Link>
          </div>
          <Link to={`/alumnos/cursos/${curso.id}`}>
            <div style={style.button}>
              <button className="btn btn-outline-dark">View Details</button>
            </div>
          </Link>
        </div>
      ))
    ) : (
      <p>Buscando...</p>
    )}
  </div>
);
