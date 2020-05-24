import React from "react";
import FormWizard from "../common/FormWizard/FormWizard";
import { CLAIM_SUBMISSION_STEPS } from "../../constants/claims.constants";
import User from "../../models/User";
import Claim from "../../models/Claim";

function CovidClaims() {
  return (
    <FormWizard
      wizardSteps={CLAIM_SUBMISSION_STEPS}
      initialState={{
        user: new User(),
        claimDetails: new Claim(),
      }}
    ></FormWizard>
  );
}
export default CovidClaims;
