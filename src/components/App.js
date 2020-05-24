import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import CovidClaims from "./covid/CovidClaims";

function App() {
  return (
    <div className="conainer">
      <CovidClaims />
    </div>
  );
}

export default hot(module)(App);
