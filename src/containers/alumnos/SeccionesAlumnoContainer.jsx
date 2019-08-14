import React from "react";
import { connect } from "react-redux";
import Secciones from "../../components/alumnos/Secciones";
import { fetchSeccionesDeUnCurso } from "../../action-creators/cursosInstructor";

class SeccionesAlumnoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSections(this.props.cursoId);
  }

  render() {
    return (
      <Secciones
        sections={this.props.sections}
        cursoId={this.props.cursoId}
        history={this.props.history}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSections: id => dispatch(fetchSeccionesDeUnCurso(id))
});

const mapStateToProps = state => ({
  sections: state.instructorCursos.secciones
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeccionesAlumnoContainer);
