import React, { useRef } from "react";
import moment from "moment";
import { setHighlightClass } from "../../utils/utility";

function ClaimForm(props) {
  const { policyNumber, eventDate, description } = props.componentData;
  const fieldRefs = {
    policyNumberRef: useRef(null),
    eventDateRef: useRef(null),
    descriptionRef: useRef(null),
  };
  const handleChange = (e, fieldName) => {
    setHighlightClass(fieldName, { highlightForm: true }, fieldRefs);
    props.handleChange(props.componentData, e);
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor="policyNumber">Policy Number</label>
        <input
          name="policyNumber"
          className={`form-control ${setHighlightClass(
            "policyNumber",
            props,
            fieldRefs
          )}`}
          type="number"
          ref={fieldRefs.policyNumberRef}
          required
          maxLength={20}
          onChange={(e) => handleChange(e, "policyNumber")}
          value={policyNumber}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventDate">Event Date</label>
        <input
          name="eventDate"
          className={`form-control ${setHighlightClass(
            "eventDate",
            props,
            fieldRefs
          )}`}
          type="date"
          ref={fieldRefs.eventDateRef}
          required
          max={moment().format("YYYY-MM-DD")}
          onChange={(e) => handleChange(e, "eventDate")}
          value={eventDate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className={`form-control ${setHighlightClass(
            "description",
            props,
            fieldRefs
          )}`}
          ref={fieldRefs.descriptionRef}
          required
          minLength={20}
          onChange={(e) => handleChange(e, "description")}
          value={description}
        />
      </div>
    </>
  );
}

export default ClaimForm;
