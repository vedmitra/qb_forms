// Key value pair where key being the step number and value being component name
// For sake of maintainance, value should always be the component name. Typo might result in errors
export const CLAIM_SUBMISSION_STEPS = {
  1: {
    title: "Basic Info",
    component: "UserForm",
  },
  2: {
    title: "Claim Details",
    component: "ClaimForm",
  },
  3: {
    title: "Confirmation",
    component: "SubmissionFeedback",
  },
};
