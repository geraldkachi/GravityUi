import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandifyApp from "./components/landify/LandifyApp";
import Gravity from "./gravity/Gravity";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Gravity} />
        <Route exact path="/landify" component={LandifyApp} />
      </Switch>
    </>
  );
};

export default App;
