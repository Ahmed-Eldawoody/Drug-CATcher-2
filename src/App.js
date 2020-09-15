import React from "react";
import { Switch, Route } from "react-router-dom";
import Screen1 from "./pages/Sreen1";
import Screen2 from "./pages/Sreen2";
import Screen3 from "./pages/Sreen3";
import "./styles.css";
//
//
//
//
//
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Screen1 />
        </Route>
        <Route exact path="/screen2">
          <Screen2 />
        </Route>
        <Route exact path="/screen3">
          <Screen3 />
        </Route>
      </Switch>
    </div>
  );
}
