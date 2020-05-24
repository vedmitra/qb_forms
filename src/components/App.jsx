import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import FormWizard from "./common/FormWizard/FormWizard";
import { CLAIM_SUBMISSION_STEPS } from "../constants/claims.constants";
import User from "../models/User";
import Claim from "../models/Claim";
import CovidClaims from "./covid/CovidClaims";

function App() {
  return (
    <div className="conainer">
      <CovidClaims />
    </div>
  );
}

export default hot(module)(App);
