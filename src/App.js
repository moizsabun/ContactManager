import "./App.css";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/contactSate";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/alertState";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./Utils/setAuthToken";
import PrivateRoutes from "./components/routes/PrivateRoutes";

if(localStorage.token)
{
    setAuthToken(localStorage.token);
}

function App() {
  return (
<AuthState>
    <ContactState>
      <AlertState>

      
    <Router>
      <>
        <Navbar></Navbar>
      
        <div className="container">
          <Alerts />
          <Switch>

            <PrivateRoutes exact path = "/"  component={Home}></PrivateRoutes>
            <Route exact path = "/about"  component={About}></Route>
            <Route exact path = "/register"  component={Register}></Route>
            <Route exact path = "/login"  component={Login}></Route>
          </Switch>

        </div>
      </>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
