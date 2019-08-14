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
  center: {
    textAlign: "center",
    marginTop: "35px",
    fontSize: "46px"
  },
  text:{
    color:"black"
  },
  button: {
    marginLeft: "30%",
    marginRight: "25%",
    display: "block",
    marginTop: "20%"
  },
};
export default ({ cursos, deleteButton }) => (
  <div>
    <div style={style.container}>
      {cursos ? (
        cursos.map(curso => (
          <div key={curso.id} className="card" style={style.childs}>
            <Link to={`/instructor/cursos/${curso.id}`}>
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
              <Link to={`/instructor/cursos/${curso.id}`}>
                <h5 className="card-title" style={style.text}>{curso.name}</h5>
                <p className="card-text" style={style.text}>
                  {curso.description.length > 120
                    ? curso.description.slice(0, 120) + "..."
                    : curso.description}
                </p>
              </Link>
              <Link to={`/instructor/cursos/${curso.id}`}>
                <div className="btn btn-outline-dark">Course Details</div>
              </Link>
              <button
                onClick={() => deleteButton(curso.id)}
                type="button"
                className="btn btn-danger"
                style={{ float: "right" }}
              >
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="container" style={style.center}>
          <p>Ups!...Todavia no tiene ningun curso creado</p>
          <Link to="/instructor/crear">
            <button className="btn btn-primary" style={style.button} type="button">
              Crear Curso
            </button>
          </Link>
        </div>
      )}
    </div>
  </div>
);
