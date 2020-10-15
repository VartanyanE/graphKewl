import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
// import AuthPage from "./pages/Auth";
// import BookingsPage from "./pages/Bookings";
import Calm from "./pages/Calm";
import Landing from "./pages/Landing";
// import Navigation from "./components/Navigation/Navigation";
// import AuthContext from "./context/auth-context";
// import Horoscope from "./components/Horoscope";
class App extends Component {
  // state = {
  //   token: null,
  //   userId: null,
  // };
  // login = (token, userId, tokenExpiration) => {
  //   this.setState({ token: token, userId: userId });
  // };

  // logout = () => {
  //   this.setState({ token: null, userId: null });
  // };

  render() {
    return (
      <Router>
        <>
          {/* <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout,
            }}
          > */}
          {/* <Navigation /> */}
          <main className="main-content">
            <AnimatePresence>
              <Route exact path="/" component={Landing} />
              <Route path="/calm" component={Calm} />
            </AnimatePresence>
            {/* {!this.state.token && <Redirect from="/" to="/auth" exact />}
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && (
                  <Redirect from="/auth" to="/events" exact />
                )}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                )}
                <Route path="/events" component={EventsPage} />
                <Route path="/horoscope" component={Horoscope} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )} */}
          </main>
          {/* </AuthContext.Provider> */}
        </>
      </Router>
    );
  }
}

export default App;
