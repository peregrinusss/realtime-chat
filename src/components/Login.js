import React, { useContext } from "react";
import { Context } from "../index";
import firebase from 'firebase/compat/app';

const Login = () => {
  const {auth} = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <form>
            <button onClick={login} type="button" className="login__google">
              Login by Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
