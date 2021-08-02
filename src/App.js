import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Place from "./places/pages/Place";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/places/new">
          <Place />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
