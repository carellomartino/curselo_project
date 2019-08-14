import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { auth, firebase } from "../config/app";
import { connect } from "react-redux";
import { createUser } from "../action-creators/createUser";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSignUp(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      
    })
  }
  handleSignIn(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(cred => this.props.createUser(cred.user))
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert("Bienvenido");
        }
      });
  }

  render() {
    return (
      <div>
        <SignUp
          handleChange={this.handleChange}
          handleSignUp={this.handleSignUp}
        />
        <SignIn
          handleSignIn={this.handleSignIn}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    user: firebase.auth().currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
