import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyDLFVBb9_GK_4itnMS_KIo3wY_1532dF-A",
  authDomain: "chat-realtime-react-7fd22.firebaseapp.com",
  projectId: "chat-realtime-react-7fd22",
  storageBucket: "chat-realtime-react-7fd22.appspot.com",
  messagingSenderId: "1033453184569",
  appId: "1:1033453184569:web:bbf60259c4bb60bd068fe8",
  measurementId: "G-QXNCNW8Y7Z",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = app.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);

reportWebVitals();
