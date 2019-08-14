import React from "react";
import { Link } from "react-router-dom";

const margin = {
  height: "668px",
  width: "100%",
  position: "absolute",
  backgroundImage:
    "url(" +
    " https://www.amputadosvencedores.com.br/wp-content/uploads/2017/02/bg-white1.jpg" +
    ")",
  backgroundSize: "container"
};
const text = {
  marginLeft: "18%",
  fontSize: "51px"
};

export default ({
  handleChange,
  handleSubmit,
  inputValue,
  messages,
  currentUser,
  handleClick,
  returnToHome
}) => {

  return (
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
          Chats
        </h6>
      </div>
      <button
        style={{
          marginLeft: "2%"
        }}
        onClick={returnToHome}
        type="button"
        className="btn btn-light"
      >
        Return to Home
      </button>
    </div>
    <div>
      <ul
        style={{
          display: "grid",
          alignItems: "center",
          marginBottom: "2%"
        }}
      >
        {messages && messages.length > 0 ? (
          messages.map((msg, i=0) =>
           
            msg.unreadMsjs ? (
              <div
                key={i++}
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "flex-start"
                }}
              >
                <Link to={`/chat/${msg.instructor}/${msg.student}`}>
                  <button
                    onClick={handleClick}
                    className="btn btn-success"
                    style={{
                      padding: "10px 0px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      marginTop: "15px",
                    }}
                  >
                    Conversation with {msg.with} : You have {msg.unreadNumber}{" "}
                    Unread Messages
                  </button>
                </Link>
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
                <Link to={`/chat/${msg.instructor}/${msg.student}`}>
                  <button
                    className="btn btn-secondary"
                    onClick={handleClick}
                    style={{
                      display: "inline-block",
                      padding: "10px 0px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      marginTop: "15px"
                    }}
                  >
                    Conversation with {msg.with}
                  </button>
                </Link>
              </div>
            )
          )
        ) : (
          <h1 >Loading.....</h1>
        )}
      </ul>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  </div>
)
}
