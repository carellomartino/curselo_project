import React from "react";
import { Link } from "react-router-dom";

const styles = {
  img: {
    marginTop: "15%"
  },
  img2: {
    marginTop: "15%",
    width: "80%"
  },
  budget: {
    fontSize: "28px",
    textAlign: "center"
  },
  button: {
    display: "block",
    margin: "auto"
  },
  button2: {
    marginLeft: "2%"
  },
  title: {
    fontSize: "28px",
    textAlign: "center",
    fontWeight: "bold"
  }
};
export default ({ curso, handleClick, isLoggedIn, studentCourse, createChat }) => (
  <div>
   
    <div className="card mb-3 container">
      <div className="row no-gutters">
        <div className="col-md-4">
          {curso.images ? (
            <img
              style={styles.img}
              src={curso.images.imagen1 && curso.images.imagen1.url}
              className="card-img"
              alt="..."
            />
          ) : (
            <img
              style={styles.img2}
              src="https://www.grupomisol.com/wp-content/uploads/2014/11/no-imagen.jpg"
              className="card-img"
              alt="..."
            />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              {curso.name}
            </h5>
            <p className="card-text">{curso.description}</p>
          </div>
        </div>
      </div>
      {isLoggedIn.uid && (studentCourse[0] && studentCourse[0].id) ? (
        <div className="alert alert-success" role="alert" style={styles.budget}>
          Comprado!
        </div>
      ) : (
        <Link to={`/alumnos/cursos/${curso.id}/comprar`}>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary btn-lg"
              onClick={handleClick}
              style={styles.button}
            >
              Comprar: USD {curso.price}
            </button>
          </div>
        </Link>
      )}
    </div>
   
    <Link to="/alumnos/cursos">
      <div style={styles.button2}>
        <button type="button" className="btn btn-outline-dark">
          Volver Atras
        </button>
      </div>
    </Link>
  </div>
)
