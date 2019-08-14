import React from "react";
import { connect } from "react-redux";
import SingleCursoComprado from "../../components/alumnos/SingleCursoComprado";
import Axios from "axios";
import { store, firebase, db, auth } from "../../config/app";

class SingleCursoCompradoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createChat = this.createChat.bind(this);

  }
  componentDidMount() {
    if (!this.props.user) this.props.history.push("/alumnos/cursos");
  }
  componentDidUpdate() {
    if (!this.props.user) this.props.history.push("/alumnos/cursos");
  }
  createChat(cursoId) {
    let studentId = auth.currentUser.uid;
    let courseId = cursoId;
    let studentName = auth.currentUser.email;
    Axios.get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourse?courseId=${courseId}`
    ).then(courseData => {
      console.log(courseData)
      let instructorId = courseData.data.ownerId;
      let instructorName = courseData.data.speakerInfo;
      let chatId = instructorId + "-" + studentId;
      let chatters = [instructorId, studentId];
      let chattersName = [instructorName, studentName];

      for (let i = 0; i < 2; i++) {
        if (i == 0) {
          let Carlos = db
            .collection("usuarios")
            .doc(`${chatters[i]}`)
            .collection("CHATS");
          Carlos.doc(chatId).set({
            instructor: instructorId,
            student: studentId,
            instrName: instructorName,
            studName: studentName,
            unreadMsjs: false,
            unreadNumber: 0,
            with: chattersName[1].split("@")[0]
          });
        }
        if (i == 1) {
          let Carlos = db
            .collection("usuarios")
            .doc(`${chatters[i]}`)
            .collection("CHATS");
          Carlos.doc(chatId).set({
            instructor: instructorId,
            student: studentId,
            instrName: instructorName,
            studName: studentName,
            unreadMsjs: false,
            unreadNumber: 0,
            with: chattersName[0]
          });
        }
      }
      this.props.history.push(`/chat/${instructorId}/${studentId}`);
    });
  }


  render() {
    return (
      <SingleCursoComprado
        createChat={this.createChat}
        cursoId={this.props.match.params.cursoId}
        history={this.props.history}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.creteUser.user.uid
});
export default connect(mapStateToProps)(SingleCursoCompradoContainer);
