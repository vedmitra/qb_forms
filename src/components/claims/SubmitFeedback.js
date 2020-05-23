import React from "react";

export default function SubmitFeedback(props) {
  const { inProgress, trackingId, message } = props;
  return (
    <>
      {inProgress && <h4>Submit in progress..</h4>}
      {!inProgress && (
        <>
          <p>Thank you</p>
          <p>{message}</p>
        </>
      )}
    </>
  );
}
