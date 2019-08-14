import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const style = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  size: {
    width: "85%",
    height: "160px"
  },
  button: {
    marginLeft: "45%"
  }
};
const ListGroupPage = props => {
  return (
    <div>
      <div className="container" style={style.container}>
        <div className="card bg-light mb-3" style={style.size}>
          <div className="card-header">
            Are you sure if you want to buy this course?
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.curso.name}</h5>
            <p className="card-text">{props.curso.price}</p>
          </div>
        </div>
      </div>
      <button
        style={style.button}
        className="btn btn-outline-dark"
        type="submit"
        onClick={props.handlePurchase}
      >
        Compra Curso
      </button>
    </div>
  );
};

export default ListGroupPage;
