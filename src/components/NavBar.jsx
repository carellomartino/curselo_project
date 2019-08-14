import React from "react";
import { Link } from "react-router-dom";
import SignUpContainer from "../containers/SignUpContainer";
const styles = {
  colors: {
    backgroundColor: "#43505D "
  },
  img: {
    width: "65px"
  },
  search: {
    display: "inline",
    margin: "auto"
  },
  child: {
    float: "right",
    display: "flex"
  },
  text: {
    color: "#C7D3DE",
    border: "none"
  }
};

export default ({ user, handleLogOut, handleSearch, handleSubmit, search }) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light" style={styles.colors}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/alumnos/cursos">
        <div>
          <img
            src="https://lh3.googleusercontent.com/ZmqnvDIzqxMj4NBjqevd7G-yyIixYtBnNSpEiThXoUjVnjKUORQgfuML-kW_SMQ5hWaMRHazEtRHalAvy23DvQ=s0"
            alt=""
            style={styles.img}
          />
        </div>
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <form
          className="form-inline my-2 my-lg-0"
          style={styles.search}
          onSubmit={handleSubmit}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            value={search}
            aria-label="Search"
            onChange={handleSearch}
          />
          <button className="btn btn-outline-dark" type="submit" style={styles.text}>
            Search
          </button>
        </form>

        {user ? (
          <ul className="navbar-nav" style={styles.child}>
            <li className="nav-item">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={handleLogOut}
                style={styles.text}
              >
                LogOut
              </button>
            </li>
             <li className="nav-item">
            <Link to="/alumnos/cursos/comprados"> <button
               className="btn btn-outline-dark"
               style={styles.text}
            
             >
               My courses
             </button>
             </Link>
           </li>
           <li className="nav-item">
            <Link to="/chat/mychats"> <button
               className="btn btn-outline-dark"
               style={styles.text}
            
             >
               My chats
             </button>
             </Link>
           </li>
           </ul>
          ) : (
            <ul className="navbar-nav" style={styles.child}>
            <li className="nav-item">
              <button
                className="btn btn-outline-dark"
                data-toggle="modal"
                data-target="#darkModalForm"
                style={styles.text}
              >
                LogIn
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-dark"
                data-toggle="modal"
                data-target="#modalRegisterForm"
                style={styles.text}
              >
                Sign Up
              </button>
            </li>
          </ul>
        )}
      </div>
      <SignUpContainer />
    </div>
  );
};
