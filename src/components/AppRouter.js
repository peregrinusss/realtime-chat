import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { privateRoutes, publicRoutes } from "../routes";
import { Context } from "..";
import {useAuthState} from "react-firebase-hooks/auth"


const AppRouter = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)

  return user ? (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={ route.component }
        />
      ))}
      <Route path="/" element={<Navigate to={CHAT_ROUTE} />} />
      <Route path="/*" element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={ route.component }
        />
      ))}
      <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
      <Route path="/*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
