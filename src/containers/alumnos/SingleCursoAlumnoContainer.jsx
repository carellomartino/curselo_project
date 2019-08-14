import React, { Component } from "react";
import SingleCursoAlumno from "../../components/alumnos/SingleCursoAlumno";
import { getMyPurchaseCourse } from "../../action-creators/getMyPurchaseCourse";
import { fetchCursoAlumno } from "../../action-creators/cursosAlumnos";
import { connect } from "react-redux";
import {auth} from "../../config/app"

class SingleCursoAlumnoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCourse: []
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getCurso(this.props.match.params.cursoId);
  }

 
  componentDidMount() {
    this.props.getCurso(this.props.match.params.cursoId);
  }
  componentDidUpdate() {
    if (this.props.isLoggedIn.uid && !this.state.studentCourse[0])
      this.props
        .getMyPurchaseCourse(this.props.isLoggedIn.uid)
        .then(courses => {
          let cursos;
          if (!courses.data.items) return this.setState({ studentCourse: [1] });
          else
            cursos = courses.data.items.filter(
              course => course.id === this.props.courseId
            );
          cursos[0]
            ? this.setState({
                studentCourse: cursos
              })
            : this.setState({
                studentCourse: [1]
              });
        });
    else if (!this.props.isLoggedIn.uid && this.state.studentCourse[0]) {
      this.setState({
        studentCourse: []
      });
    }
  }
  handleClick(e) {
    e.preventDefault();
    if (auth.currentUser) {
      this.props.history.push(`/alumnos/cursos/${this.props.courseId}/comprar`);
    } else {
      alert("Registrate");
    }
  }

  render() {
    return (
      <SingleCursoAlumno
        studentCourse={this.state.studentCourse}
        curso={this.props.curso}
        purchaseCourse={this.props.purchaseCourse}
        handleClick={this.handleClick}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurso: id => dispatch(fetchCursoAlumno(id)),
  getMyPurchaseCourse: id => dispatch(getMyPurchaseCourse(id))
});

const mapStateToProps = (state, ownProps) => {
  return {
    curso: state.alumnoCursos.course,
    purchaseCourse: state.creteUser.purchasedCourse,
    isLoggedIn: state.creteUser.user,
    courseId: ownProps.match.params.cursoId
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCursoAlumnoContainer);
