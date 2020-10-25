import React, { Component } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
} from "react-router-dom";

import Calm from "./pages/Calm";


class App extends Component {

  render() {
    return (
      <Router>
        <>

          <main className="main-content">
            <AnimatePresence>
              <Route exact path="/" component={Calm} key={1} />

            </AnimatePresence>

          </main>

        </>
      </Router>
    );
  }
}

export default App;
