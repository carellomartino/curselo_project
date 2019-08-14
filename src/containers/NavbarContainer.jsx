import React from "react";
import Navbar from "../components/NavBar";
import { connect } from "react-redux";
import { firebase } from "../config/app";
import { searchCourse } from "../action-creators/searchCourse";
import { createUser, deLogUser } from "../action-creators/createUser";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSearch(e) {
    e.preventDefault();
    const search = e.target.value;
    this.setState({
      search: search
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const searchCourses = this.state.search;
    if (searchCourses) {
      this.props
        .searchCourse(searchCourses)
        .then(() => this.props.history.push("/alumnos/cursos/search"))
        .then(() =>
          this.setState({
            search: ""
          })
        );
    }
  }
  handleLogOut() {
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

  render() {
    return (
      <div>
        <Navbar
          user={this.props.user}
          handleLogOut={this.handleLogOut}
          handleSearch={this.handleSearch}
          search={this.state.search}
          handleSubmit={this.handleSubmit}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: firebase.auth().currentUser,
    searchCourse: state.searchCourses
  };
};
const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
  deLogUser: () => dispatch(deLogUser()),
  searchCourse: name => dispatch(searchCourse(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
