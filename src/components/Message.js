import React from "react";

const Message = ({ src, name, msg, uid, msgid, time }) => {
  const secondsSinceEpoch = time.seconds;
  const millisecondsSinceEpoch = secondsSinceEpoch * 1000;
  const date = new Date(millisecondsSinceEpoch);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const dateTime = `${hours}:${minutes}`

  return (
    <div
      className="message"
      style={{
        marginLeft: uid === msgid ? "auto" : "0",
        flexDirection: uid === msgid ? "row-reverse" : "row",
      }}
    >
      <div className="message__img">
        <img src={src} alt="Avatar" />
      </div>
      <div
        className="message__body"
        style={{
          background:
            uid === msgid
              ? "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
              : "rgb(51, 51, 51, 0.9)",
          borderTopRightRadius: uid === msgid ? "0" : "15px",
          borderTopLeftRadius: uid === msgid ? "15px" : "0",
        }}
      >
        <div className="message__name" style={{
          color: uid === msgid ? "#5711ad" : "#51e1ce",
        }}>{name}</div>
        <span className="message__text" style={{color: uid === msgid ? "#000" : "#fff"}}>{msg}</span>
        <span className="message__time">{dateTime}</span>
      </div>
    </div>
  );
};

export default Message;
