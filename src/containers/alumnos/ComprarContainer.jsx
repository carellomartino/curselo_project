import React from "react";
import Comprar from "../../components/alumnos/Comprar";
import { buyCourse } from "../../action-creators/comprarCourse";
import { connect } from "react-redux";

class ComprarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePurchase = this.handlePurchase.bind(this);
  }
  handlePurchase(e) {
    e.preventDefault();
    this.props.purchaseCourse(this.props.courseId, this.props.userId);
    this.props.history.push(`/alumnos/cursos/${this.props.courseId}`);
  }

  render() {
    return (
      <Comprar handlePurchase={this.handlePurchase} curso={this.props.curso} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courseId: ownProps.match.params.cursoId,
    userId: state.creteUser.user.uid,
    curso: state.alumnoCursos.course
  };
};
const mapDispatchToProps = dispatch => ({
  purchaseCourse: (courseId, userId) => {
    dispatch(buyCourse(courseId, userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComprarContainer);
