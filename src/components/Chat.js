import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "../index";
import Loader from "./Loader";
import Message from "./Message";
import bg from "../img/chat_bg.jpg"

const Chat = () => {
  const { firebase, auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="chat">
      <div className="container">
        <div className="chat__inner">
          <div className="chat__area">
            {/* <img src={bg} alt="" className="chat__bg" /> */}
            {messages.map((message) => (
              <Message
                key={message.text}
                src={message.photoURL}
                name={message.displayName}
                msg={message.text}
                uid={user.uid}
                msgid={message.uid}
                time={message.createdAt}
              />
            ))}
          </div>
          <div className="chat__footer">
            <input
              type="text"
              name="chat_text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
