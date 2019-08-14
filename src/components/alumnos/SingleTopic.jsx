import React from "react";
import SideBar from "../alumnos/SideBar";
import Vimeo from "@u-wave/react-vimeo";

const styles = {
  container: {
    height: "100%",
    width: "100%"
  },
  video: {
    objectFit: "cover"
  },
  text: {
    fontFamily: " Georgia,serif",
    fontSize: " 25px;",
    letterSpacing: " 1.3px",
    wordSpacing: " 3.4px",
    fontWeight: " normal",
    textDecoration: " none solid rgb(68, 68, 68)",
    fontStyle: " italic",
    fontVariant: " normal",
    textTransform: " none"
  },
  textBox: {
    marginLeft: "260px",
    height: "80vh",
    width: "75vw",
    textAlign: "center",
    overflowY: "scroll"
  },
  videoBox: {
    marginLeft: "330px",
    marginTop: "10px",
    overflowY: "scroll"
  },
  pdfBox: {
    marginLeft: "46vw",
    marginTop:"30vh",
    
  },
  pdf:{
    height:"20vh",
    width:"20vw"
  }
};

export default props => (
  <div style={styles.container}>
    <SideBar cursoId={props.cursoId} history={props.history} />

    {props.topic.contentURL && props.topic.contentURL.includes("vimeo") ? (
      <div style={styles.videoBox}>
        <Vimeo
          width="950"
          video={props.topic.contentURL.slice(
            14,
            props.topic.contentURL.length
          )}
          autoplay
          style={styles.video}
        />
      </div>
    ) : props.topic.contentURL &&
      props.topic.contentURL.includes("firebase") ? (
      <div style={styles.pdfBox}>
        <a href={props.topic.contentURL} target="_blank">
      <button type="button" className="btn btn-outline-dark btn-lg" style={styles.pdf}>
          Open pdf
      </button>
        </a>
      </div>
    ) : (
      props.topic.content &&
      props.topic.content.length && (
        <div style={styles.textBox}>
          <p style={styles.text}>{props.topic.content}</p>
        </div>
      )
    )}
  </div>
);
