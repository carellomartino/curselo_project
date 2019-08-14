import React, { Component } from "react";
import { db, auth } from "../config/app";
import MyChats from "../components/MyChats";

export default class MyChatsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    };
    this.userId = auth.currentUser.uid;
    this.returnToHome = this.returnToHome.bind(this);
    this.unsubscribe;
  }

  returnToHome() {
    this.props.history.goBack();
  }

  componentDidMount() {
   this.unsubscribe= db.collection("usuarios")
      .doc(this.userId)
      .collection("CHATS")
      .onSnapshot(snapshot => {
        let msgs = [];
        snapshot.forEach(doc => {
          let chat = doc.data();
          msgs.push(chat);
        });
        this.setState({
          chats: msgs
        });
      })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    return (
      <MyChats
        messages={this.state.chats}
        currentUser={auth.currentUser}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.message}
        handleClick={this.handleClick}
        returnToHome={this.returnToHome}
      />
    );
  }
}
