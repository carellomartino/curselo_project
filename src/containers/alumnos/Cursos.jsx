import React, { Component } from "react";
import Cursos from "../../components/alumnos/VerCursos";
import { fetchCursosAlumno } from "../../action-creators/cursosAlumnos";
import { connect } from "react-redux";

class instructor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCursos();
  }

  render() {
    return <Cursos cursos={this.props.cursos} />;
  }
}

const mapDispatchToProps = dispatch => ({
  getCursos: () => dispatch(fetchCursosAlumno())
});

const mapStateToProps = state => ({
  cursos: state.alumnoCursos.all.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(instructor);
