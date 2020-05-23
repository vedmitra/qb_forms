import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import FormWizard from "./common/FormWizard/FormWizard";
import { CLAIM_SUBMISSION_STEPS } from "../constants/claims.constants";

function App() {
  return (
    <div className="conainer">
      <FormWizard wizardSteps={CLAIM_SUBMISSION_STEPS}></FormWizard>
    </div>
  );
}

export default hot(module)(App);
