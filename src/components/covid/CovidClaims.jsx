import React, { useState } from "react";
import FormWizard from "../common/FormWizard/FormWizard";
import { CLAIM_SUBMISSION_STEPS } from "../../constants/claims.constants";
import User from "../../models/User";
import Claim from "../../models/Claim";
import { saveClaim } from "../../api/claimSubmitAPI";

function CovidClaims() {
  const [submitStatus, setSubmitStatus] = useState({
    inProgress: false,
    success: false,
    error: false,
    message: "",
  });
  const submitForm = (claim) => {
    setSubmitStatus({
      inProgress: true,
    });
    saveClaim(claim)
      .then(() =>
        setSubmitStatus({
          inProgress: false,
          success: true,
        })
      )
      .catch((error) => {
        console.log("Error in submitting the claim");
        setSubmitStatus({
          inProgress: false,
          error: true,
          message: "Submission Failed. Please try again",
        });
      });
  };
  return (
    <FormWizard
      wizardSteps={CLAIM_SUBMISSION_STEPS}
      initialState={{
        user: new User(),
        claimDetails: new Claim(),
      }}
      submmitForm={(claim) => submitForm(claim)}
      submitStatus={submitStatus}
    ></FormWizard>
  );
}
export default CovidClaims;
