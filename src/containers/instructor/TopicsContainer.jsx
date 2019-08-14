import React, { Component } from "react";
import { fetchTopicsDeUnaSeccion } from "../../action-creators/cursosInstructor";
import Topics from "../../components/instructor/Topics";
import Axios from "axios";

export default class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    fetchTopicsDeUnaSeccion(this.props.secId).then(topics => {
      topics
        ? this.setState({
            topics: topics
          })
        : this.setState({
            topics: []
          });
    });
  }

  deleteButton(tId, sId) {
    Axios.post(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/archiveCourseTopic?topicId=${tId}`
    ).then(() => {
      fetchTopicsDeUnaSeccion(sId).then(topics => {
        topics
          ? this.setState({
              topics: topics
            })
          : this.setState({
              topics: []
            });
      });
    });
  }

  render() {
    return (
      <Topics
        topics={this.state.topics}
        secId={this.props.secId}
        courseId={this.props.courseId}
        deleteButton={this.deleteButton}
      />
    );
  }
}
