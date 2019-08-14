import React from "react";
import { Link } from "react-router-dom";
// var Vimeo = require('vimeo').Vimeo;
// let client = new Vimeo("79777f858528bbc2fe7dbd2ab433fc43f9ea943f", "bFpq8T2/DobNzcZIbqreWHf+vTy+ZkDgD+qkDAR28yK6LIII/w8b554SHIdWniJsUQzko2DtzoIaz/Uw8g4CynEJ+uZuy8R9huXPHu36FD+W2rod5+mqzbENygYt2LFy", "23e7dd95c112d5cb3c3daf8cf3934055");
// client.upload(
//   "/home/erikelrojohackviking/Escritorio/IMG_7519.MOV",
//   function (uri) {
//     console.log('File upload completed. Your Vimeo URI is:', uri)
//   },
//   function (bytesUploaded, bytesTotal) {
//     var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
//     console.log(bytesUploaded, bytesTotal, percentage + '%')
//   },
//   function (error) {
//     console.log('Failed because: ' + error)
//   }
// )
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  child: {
    margin: "auto",
    marginTop: "25%",
    paddingLeft: "20%"
  },
  child1: {
    margin: "auto",
    marginTop: "25%",
    paddingRight: "20%"
  }
};

export default props => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div className="container" style={styles.container}>
      <div style={styles.child}>
        <button onClick={props.googleLogin} className="btn btn-lg btn-primary">
          Quiero enseñar!
        </button>
      </div>
      <div style={styles.child1}>
        <button onClick={props.setAlumno} className="btn btn-lg btn-primary">
          Quiero aprender!
        </button>
      </div>
    </div>
  </div>
);
