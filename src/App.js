import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {useAuthState} from "react-firebase-hooks/auth"
import { useContext } from "react";
import { Context } from "./index";
import Loader from "./components/Loader";

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <main className="main">
        <AppRouter/>
      </main>
    </BrowserRouter>
  )
}

export default App;
