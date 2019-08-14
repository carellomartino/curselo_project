import React, { Component } from "react";
import { store, db, auth } from "../config/app";
import Chat from "../components/Chat";
import { connect } from "react-redux";

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: []
    };
    this.unsuscribe;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnToChats = this.returnToChats.bind(this);
    this.current = auth.currentUser.uid;
    this.courseId = this.props.curso;
    this.studentId = this.props.match.params.userId;
    this.instructorId = this.props.match.params.instructorId;
//    let msg = this.state.message;
    this.chatId = this.instructorId + "-" + this.studentId;
    this.chatters = [this.instructorId, this.studentId];
    this.otherChatter = this.chatters.filter(id => id !== this.current);
  }

  returnToChats() {
    this.props.history.goBack();
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  componentDidMount() {
    function compareMsj(a, b) {
      let aId = a.createdAt;
      let bId = b.createdAt;
      return aId - bId;
    }

    this.unsuscribe=db.collection("mensajeria")
      .doc(`${this.instructorId}-${this.studentId}`)
      .collection("CHATS")
      .onSnapshot(querySnapshot => {
        let msgs = [];
        querySnapshot.forEach(doc => {
          msgs.push(doc.data());
        });
        msgs.sort(compareMsj);
        this.setState({
          messages: msgs
        });

        db.collection("usuarios")
          .doc(`${this.current}`)
          .collection("CHATS")
          .doc(this.chatId)
          .update({
            unreadMsjs: false,
            unreadNumber: 0
          });
      });
  }
  componentWillUnmount(){
    this.unsuscribe()
  }
  handleSubmit(e) {
    e.preventDefault();
    db.collection("mensajeria")
      .doc(`${this.instructorId}-${this.studentId}`)
      .collection("CHATS")
      .add({
        from: `${this.current}`,
        to: `${this.instructorId}`,
        message: this.state.message,
        createdAt: Date.now(),
        between: [`${this.studentId}`, `${this.instructorId}`]
      })
      .then(() => {
        db.collection("usuarios")
          .doc(`${this.otherChatter}`)
          .collection("CHATS")
          .doc(this.chatId)
          .update({
            unreadMsjs: true,
            unreadNumber: store.FieldValue.increment(1)
          });
      })
      .then(() =>
        this.setState({
          message: ""
        })
      );
  }

  render() {
    return (
      <Chat
        messages={this.state.messages}
        currentUser={auth.currentUser}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.message}
        returnToMyChats={this.returnToMyChats}
        returnToChats={this.returnToChats}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    curso: state.alumnoCursos.course.id
  };
};
export default connect(
  mapStateToProps,
  null
)(ChatContainer);
