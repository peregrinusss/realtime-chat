import Chat from "./components/Chat";
import Login from "./components/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const privateRoutes = [
  {
    key: 1,
    path: LOGIN_ROUTE,
    component: <Login/>,
  }
]

export const publicRoutes = [
  {
    key: 2,
    path: CHAT_ROUTE,
    component: <Chat/>,
  }
]