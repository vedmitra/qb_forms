import React from "react";

export default function SubmitFeedback(props) {
  const { submitStatus } = props;
  return (
    <div class="text-center">
      {submitStatus.inProgress && <h4>Submit in progress..</h4>}
      {submitStatus.success && (
        <>
          <p>
            Thank you. Your claim is being processed. Please use your registered
            email id to track your claim
          </p>
        </>
      )}
      {submitStatus.error && (
        <>
          <p>
            There is some problem in submitting your claim. Please try again or
            contact support
          </p>
        </>
      )}
    </div>
  );
}
