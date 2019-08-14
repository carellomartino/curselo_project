import React, { Component } from "react";
import InstructorCursos from "../../components/instructor/InstructorCursos";
import { connect } from "react-redux";
import {
  fetchCursosInstructor,
  deleteCourse
} from "../../action-creators/cursosInstructor";

import { auth } from "../../config/app";

class InstructorCursosContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    this.props.getCursos(auth.currentUser.uid);
  }

  deleteButton(id) {
    deleteCourse(id).then(() => this.props.getCursos(auth.currentUser.uid));
  }

  render() {
    return (
      <InstructorCursos
        cursos={this.props.cursos}
        deleteButton={this.deleteButton}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCursos: id => dispatch(fetchCursosInstructor(id))
});

const mapStateToProps = state => ({
  cursos: state.instructorCursos.all.items
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructorCursosContainer);
