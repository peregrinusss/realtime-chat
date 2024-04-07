import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "..";
import {useAuthState} from "react-firebase-hooks/auth"

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {user ? (
              <button onClick={() => auth.signOut()} className="navbar__btn">Logout</button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <button className="navbar__btn">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
