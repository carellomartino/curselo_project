import React from "react";
import CrearTema from "../../components/instructor/CrearTema";
//import { firebase, db } from "../../config/app";
//import { auth } from "../../config/app";

export default class CrearTemaContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CrearTema 
    history={this.props.history}
    sectionId={this.props.match.params.sectionId}
    courseId={this.props.match.params.cursoId}
    />
  }

};
