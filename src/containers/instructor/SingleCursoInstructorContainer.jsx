import React, { Component } from "react";
import SingleCursoInstructor from "../../components/instructor/SingleCursoInstructor";
import { connect } from "react-redux";
import {
  fetchCursoInstructor,
  forgetCourse
} from "../../action-creators/cursosInstructor";
import { createNewSection } from "../../action-creators/createSection";

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.forgetCourse();
    this.props.getCurso(this.props.match.params.cursoId);
  }

  handleChange(e) {
    this.setState({
      section: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    this.props.createNewSection({
      name: this.state.section,
      courseId: this.props.match.params.cursoId
    });
  }

  render() {
    return (
      <SingleCursoInstructor
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        curso={this.props.curso}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurso: id => dispatch(fetchCursoInstructor(id)),
  forgetCourse: () => dispatch(forgetCourse()),
  createNewSection: section => dispatch(createNewSection(section))
});

const mapStateToProps = state => ({
  curso: state.instructorCursos.course
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCursoInstructorContainer);
