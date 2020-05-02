import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PizzaForm from "./Components/PizzaForm";
import PizzaHome from "./Components/PizzaHome";
import Tracker from "./Components/Tracker";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza-tracker">
          <Tracker />
        </Route>
        <Route path="/pizza-form">
          {" "}
          <PizzaForm />
        </Route>
        <Route path="/">
          <PizzaHome />
        </Route>
      </Switch>
    </>
  );
};
export default App;
