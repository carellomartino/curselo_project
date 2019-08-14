import React from "react";
import { connect } from "react-redux";
import Topics from "../../components/alumnos/Topics";
import { fetchTopicsDeUnaSeccion } from "../../action-creators/cursosInstructor";

class TopicsAlumnosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    fetchTopicsDeUnaSeccion(this.props.sectionId).then(topics => {
      if (topics)
        this.setState({
          topics: topics
        });
    });
  }

  render() {
    return (
      <Topics
        topics={this.state.topics}
        id={this.props.sectionId}
        cursoId={this.props.cursoId}
        history={this.props.history}
      />
    );
  }
}

export default connect()(TopicsAlumnosContainer);
