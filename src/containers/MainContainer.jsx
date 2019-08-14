import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../components/Main";
import { firebase } from "../config/app";
import { auth } from "../config/app";
import { createUser } from "../action-creators/createUser";

class MainConTainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingInstructor: false,
      loadingAlumno: false,
      loadingChat: false
    };
    this.logear = this.logear.bind(this);
    this.logearAlumno = this.logearAlumno.bind(this);
    this.logearChat = this.logearChat.bind(this);
  }

  logear() {
    var unsuscribe= auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loadingInstructor: true
        });
    unsuscribe()

      } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(user => {
            this.setState({
              loadingInstructor: true
            });
               unsuscribe()

            return user;
          });
      }
    });
  }
  logearAlumno() {
    var unsuscribe=auth.onAuthStateChanged(user => {
      if (user) {
        this.props.logUser(user);
        this.setState({
          loadingAlumno: true
        });
    unsuscribe()

      } else {
        this.setState({
          loadingAlumno: true
        });
    unsuscribe()

      }
    });
  }
  logearChat(history) {
    var unsuscribe= auth.onAuthStateChanged(user => {
      if (user) {
        this.props.logUser(user);
        this.setState({
          loadingChat: true
        });
    unsuscribe()

      } else {
        unsuscribe()
        history.push("/");
      }
    });
  }
  render() {
    return (
      <Main
        loadingInstructor={this.state.loadingInstructor}
        loadingChat={this.state.loadingChat}
        loadingAlumno={this.state.loadingAlumno}
        logear={this.logear}
        logearAlumno={this.logearAlumno}
        logearChat={this.logearChat}
        history={this.props.history}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logUser: user => dispatch(createUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(MainConTainer);
