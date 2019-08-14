import React, { Component } from "react";
import Home from "../components/Home";
import { firebase } from "../config/app";
import {deLogUser } from "../action-creators/createUser";
import { connect } from "react-redux";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumno: false
    };

    this.googleLogin = this.googleLogin.bind(this);
    this.setAlumno = this.setAlumno.bind(this);
  }

  componentDidMount(){
    firebase
    .auth()
    .signOut()
    .then(() => {
      this.props.deLogUser({});
    })
    .catch(function(error) {
      alert(error);
    });
  }

  setAlumno() {
    this.setState({
      alumno: true
    });
    this.props.history.push("/alumnos/cursos");
  }

  googleLogin() {
    this.props.history.push("/instructor");
  }
  render() {
    return <Home googleLogin={this.googleLogin} setAlumno={this.setAlumno} />;
  }
}

const mapStateToProps = state => {
  return {
    user: firebase.auth().currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  deLogUser: () => dispatch(deLogUser()),
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)