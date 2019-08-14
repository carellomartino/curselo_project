import React from "react";
import EditarCurso from "../../components/instructor/EditarCurso";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchCursoAlumno } from "../../action-creators/cursosAlumnos";
import { firebase, auth } from "../../config/app";

class EditarCursoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curso: {},
      name: "",
      description: "",
      price: 0,
      image: "",
      imageUrl1: "",
      imageUrl2: "",
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadImg = this.handleUploadImg.bind(this);
    this.handleSetImg = this.handleSetImg.bind(this);
  }
  componentDidMount() {
    console.log("PROPS en editar curso", this.props);
    this.props.getCourse(this.props.match.params.courseId);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    Axios.post(`https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourse`, {
      id: this.props.course.id,
      name: this.state.name ? this.state.name : this.props.course.name,
      price: this.state.price ? this.state.price : this.props.course.price,
      ownerId: this.props.course.ownerId,
      description: this.state.description
        ? this.state.description
        : this.props.course.description,
      images: {
        imagen1: {
          url: this.state.imageUrl1
            ? this.state.imageUrl1
            : this.props.course.images.imagen1.url
        }
      }
    }).then(data => {
      this.props.history.push(
        `/instructor/cursos/${this.props.match.params.courseId}`
      );
    });
  }

  handleSetImg(e) {
    e.preventDefault();
    let img = e.target.files[0];
    this.setState({
      image: img
    });
  }

  handleUploadImg(e) {
    e.preventDefault();
    this.setState({
      loading: false
    });
    const file = this.state.image;
    const storageRef = firebase
      .storage()
      .ref(`/images/${auth.currentUser.uid}/${file.name}`);
    storageRef.put(file).then(file => console.log("FILE?", file));
    storageRef.getDownloadURL().then(data => {
      this.setState({
        imageUrl1: data,
        loading: true
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <EditarCurso
        history={this.props.history}
        courseId={this.props.match.params.courseId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleSetImg={this.handleSetImg}
        handleUploadImg={this.handleUploadImg}
        imageUrl1={this.state.imageUrl1}
        loading={this.state.loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    course: state.alumnoCursos.course
  };
};

const mapDispatchToProps = dispatch => ({
  getCourse: id => dispatch(fetchCursoAlumno(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditarCursoContainer);
