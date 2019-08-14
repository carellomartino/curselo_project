import React from "react";
import SubirTexto from "../../components/instructor/SubirTexto";
import Axios from "axios";

export default class SubirTextoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var obj = {};
    if (this.props.topicId) {
      obj = { sectionId: this.props.sectionId, id: this.props.topicId };
      if (this.state.text.length) obj.content = this.state.text;
      else obj.content = this.props.topic.content;
      if (this.state.name.length) obj.name = this.state.name;
      else obj.name = this.props.topic.name;
    } else
      obj = {
        sectionId: this.props.sectionId,
        content: this.state.text,
        name: this.state.name
      };
    Axios.post(
      "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseTopic",
      obj
    ).then(data2 => {
      this.props.history.push(`/instructor/cursos/${this.props.courseId}`);
    });
  }

  render() {
    return (
      <SubirTexto
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        courseId={this.props.cursoId}
        sectionId={this.props.sectionId}
      />
    );
  }
}
