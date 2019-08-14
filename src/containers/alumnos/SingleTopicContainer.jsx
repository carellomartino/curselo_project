import React from "react";
import { connect } from "react-redux";
import SingleTopic from "../../components/alumnos/SingleTopic";
import Axios from "axios";
import { auth } from "../../config/app";

class SingleTopicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {}
    };
  }
  componentDidMount() {
    if (!this.props.user) this.props.history.push("/alumnos/cursos");
    if (this.state.topic.id !== this.props.match.params.topicId)
      Axios.get(
        `https://curselo-dev.appspot.com/_ah/api/lms/v2/getSectionTopics?sectionId=${
          this.props.match.params.sectionId
        }`
      ).then(res =>
        this.setState({
          topic: res.data.items.filter(
            topic => topic.id === this.props.match.params.topicId
          )[0]
        })
      );
  }
  componentDidUpdate() {
    if (!this.props.user) this.props.history.push("/alumnos/cursos");
    if (this.state.topic.id !== this.props.match.params.topicId)
      Axios.get(
        `https://curselo-dev.appspot.com/_ah/api/lms/v2/getSectionTopics?sectionId=${
          this.props.match.params.sectionId
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
      <SingleTopic
        cursoId={this.props.match.params.cursoId}
        topic={this.state.topic}
        history={this.props.history}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.creteUser.user.uid
});

export default connect(mapStateToProps)(SingleTopicContainer);
