import React, { Component } from "react";
import ChatSidebar from "../components/ChatSidebar";
import { db, auth } from "../config/app";

export default class SidebarChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   console.log("HOLA!");
  //   let userId = `"` + auth.currentUser.uid + `"`;
  //   let courseId = this.props.match.params.courseId;
  //   console.log(auth.currentUser.uid);
  //   console.log("soy User Id", userId);
  //   db.collection("mensajeria")
  //     .doc(`${user}-${courseId}`)
  //     .collection("CHATS")
  //     .where("between", "array-contains", userId)
  //     .get()
  //     .then(function(querySnapshot) {
  //       console.log(querySnapshot);
  //       querySnapshot.forEach(function(doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //       });
  //     })
  //     .catch(function(error) {
  //       console.log("Error getting documents: ", error);
  //     });
  // }

  render() {
    return (
      <div>
        <ChatSidebar />
      </div>
    );
  }
}
