import React from "react";
import { Link } from "react-router-dom";

const margin = {
  height: "93.7vh",
  overflowY:"scroll",
  width: "100%",
  marginBottom: "3%",
  position: "absolute",
  backgroundImage:
    "url(" +
    " https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png" +
    ")",
  backgroundSize: "container"
};
const text = {
  marginLeft: "18%",
  fontSize: "51px"
};

const chatBar = {
  position: "fixed",
  bottom: "0%",
  width: "100%",
  right: "0%"
};

export default ({
  handleChange,
  handleSubmit,
  inputValue,
  messages,
  currentUser,
  returnToChats
}) => (
  <div style={margin}>
    <div
      style={{
        background: "#43505D",
        opacity: "0.8",
        color:"white"
      }}
      className="jumbotron jumbotron-fluid"
    >
      <div className="container">
        <h6 className="display-4" style={text}>
          Welcome to the Curselo Messenger
        </h6>
      </div>
      <button
        style={{
          marginLeft: "2%"
        }}
        onClick={returnToChats}
        type="button"
        className="btn btn-light"
      >
        Go Back
      </button>
    </div>
    <div>
      <div
      
        style={{
          display: "grid",
          alignItems: "center",
          marginBottom: "2%"
        }}
      >
        {messages &&
          messages.map((msg, i=0) =>
            currentUser.uid == msg.from ? (
              <div
                key={i++}
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "flex-end"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                    background: "#70CAF4",
                    marginTop: "15px",
                    borderRadius: "3px",
                    boxShadow: "1px 2px #a9b8cf",
                    color: "black",
                    marginRight: "7px"
                  }}
                >
                  {msg.message}
                </span>
              </div>
            ) : (
              <div
              key={i++}
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "flex-start"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                    background: "#CBEBFB",
                    marginTop: "15px",
                    borderRadius: "3px",
                    textAlign: "center",
                    boxShadow: "1px 2px #a9b8cf"
                  }}
                >
                  {msg.message}
                </span>
              </div>
            )
          )}
      </div>

      <form onSubmit={handleSubmit} style={chatBar}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter your message here"
          aria-label="Search"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  </div>
);
