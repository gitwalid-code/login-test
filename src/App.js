import Soundage from "./components/soundage";
import Login from "./components/login";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Soundage</Link>
        <br></br>
        <Link to="/login">login</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Soundage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
