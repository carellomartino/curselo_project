import React from "react";
import EditarTema from "../../components/instructor/EditarTema";
import Axios from "axios";

export default class EditarTemaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {}
    };
  }
  componentDidMount() {
    Axios.get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getSectionTopics?sectionId=${
        this.props.match.params.secId
      }`
    ).then(res =>
      this.setState({
        topic: res.data.items.filter(
          topic => topic.id === this.props.match.params.topicId
        )[0]
      })
    );
  }
  render() {
    return (
      <EditarTema
        history={this.props.history}
        sectionId={this.props.match.params.secId}
        courseId={this.props.match.params.courseId}
        topicId={this.props.match.params.topicId}
        topic={this.state.topic}
      />
    );
  }
}
