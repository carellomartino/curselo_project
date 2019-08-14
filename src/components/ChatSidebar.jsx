import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const styles = {
  wrapper: {
    display: "flex",
    width: "100%"
  },
  sidebar: {
    width: "200px",
    position: " fixed",
    top: "0",
    left: "0",
    height: "100vh",
    zIndex: "999",
    background: "#90CAF9",
    color: "#fff",
    transition: "all 0.3s"
  },
  text: {
    color: "ligth-blue",
    margin: "10px"
  },
  img: {
    width: "95px"
  },
  btn: {
    width: "100%"
  }
};

export default () => (
  <div className="wrapper" style={styles.wrapper}>
    <nav id="sidebar" style={styles.sidebar}>
      <div style={styles.text}>
        <div>
          <Link to="/instructor">
            <center>
              <img
                src="https://lh3.googleusercontent.com/ZmqnvDIzqxMj4NBjqevd7G-yyIixYtBnNSpEiThXoUjVnjKUORQgfuML-kW_SMQ5hWaMRHazEtRHalAvy23DvQ=s0"
                alt=""
                style={styles.img}
              />
            </center>
          </Link>
        </div>
        <br />
        <ul className="list-unstyled components">
          <Link to="/instructor">
            <button
              type="button"
              className="btn btn-outline-light"
              style={styles.btn}
            >
              <li className="active">Home</li>
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  </div>
);
