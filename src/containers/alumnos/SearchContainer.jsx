import React from "react";
import Search from "../../components/alumnos/Search";
import { connect } from "react-redux";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Search searchCourses={this.props.searchCourses} />;
  }
}
const mapStateToProps = state => ({
  searchCourses: state.searchCourses.searchCourse.items
});

export default connect(mapStateToProps)(SearchContainer);
