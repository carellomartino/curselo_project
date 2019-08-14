import React from "react";
import SideBar from "./SideBar";
const styles = {
  div: {
    marginLeft: "18%"
  },
  title: {
    textAlign: "center",
    fontSize: "52px",
    color: "white"
  },
  subTitle: {
    textAlign: "center",
    fontSize: "32px",
    marginTop: "1%"
  },
  jumbotron: {
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" +
      ")"
  },
  card: {
    marginTop: "-5%"
  },
  cardBody: {
    marginTop: "-2%",
    fontSize: "16px",
    textAlign: "center"
  }
};
export default props => (
  <div style={styles.div}>
    <div
      style={{
        float: "right",
        marginRight: "10%"
      }}
    >
      <button
        onClick={() => props.createChat(props.cursoId)}
        type="button"
        className="btn btn-outline-secondary btn-lg"
      >
        Chat with your teacher
      </button>
    </div>
    <div className="jumbotron" style={styles.jumbotron}>
      <div className="container">
        <h1 className="display-3" style={styles.title}>
          Welcome to your course!
        </h1>
      </div>
    </div>
    <div className="card" style={styles.card}>
      <div className="card-body" style={styles.cardBody}>
        <p className="display-3" style={styles.subTitle}>
          Content
        </p>
        From this page you'll be able to access videos, files and texts which will enhance your
        learning process. The lessons aren't going anywhere so you can view them anytime
        you want, event after you complete the course.
      </div>
    </div>
    <div className="card">
      <div className="card-body" style={styles.cardBody}>
        <p className="display-3" style={styles.subTitle}>
          Messages
        </p>
        You can contact your teacher through our chat in case you
        have any questions or need assistance.
      </div>
    </div>
    <div className="card">
      <div className="card-body" style={styles.cardBody}>
        <p className="display-3" style={styles.subTitle}>
          Contact us
        </p>
        Feel free to contact us if you have any questions or concerns. The
        Curselo team is here to help you and make your learning experience as
        smooth and enjoyable as possible. Happy learning!
      </div>
    </div>
    <SideBar cursoId={props.cursoId} history={props.history} />
  </div>
);
