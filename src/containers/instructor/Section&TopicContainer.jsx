import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSeccionesDeUnCurso,
  deleteSection
} from "../../action-creators/cursosInstructor";
import SectionTopic from "../../components/instructor/Section&Topic";

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    this.props.getSecciones(this.props.cursoId);
  }
  deleteButton(id) {
    deleteSection(id).then(() => this.props.getSecciones(this.props.cursoId));
  }
  render() {
    return (
      <SectionTopic
        secciones={this.props.secciones}
        courseId={this.props.cursoId}
        deleteButton={this.deleteButton}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSecciones: id => dispatch(fetchSeccionesDeUnCurso(id))
});

const mapStateToProps = state => ({
  secciones: state.instructorCursos.secciones
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCursoInstructorContainer);
