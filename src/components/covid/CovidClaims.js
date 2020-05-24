import React, { useState } from "react";
import FormWizard from "../common/FormWizard/FormWizard";
import { CLAIM_SUBMISSION_STEPS } from "../../constants/claims.constants";
import User from "../../models/User";
import Claim from "../../models/Claim";
import { saveClaim } from "../../api/claimSubmitAPI";

/**
 * Specific component to handle covid releated claims.
 */
function CovidClaims() {
  // Below state is needed to pas in to the child components for them to update accordingly.
  const [submitStatus, setSubmitStatus] = useState({
    inProgress: false,
    success: false,
    error: false,
    message: "",
  });
  // API call to submit the data and pass appropriate state to hild compoennts
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
