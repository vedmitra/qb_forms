import React, { useRef } from "react";
import { setHighlightClass } from "../../utils/utility";

function UserForm(props) {
  const { firstName, lastName, email } = props.componentData;
  const fieldRefs = {
    firstNameRef: useRef(null),
    lastNameRef: useRef(null),
    emailRef: useRef(null),
  };
  const handleChange = (e, fieldName) => {
    setHighlightClass(fieldName, { highlightForm: true }, fieldRefs);
    props.handleChange(props.componentData, e);
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          className={`form-control ${setHighlightClass(
            "firstName",
            props,
            fieldRefs
          )}`}
          type="text"
          ref={fieldRefs.firstNameRef}
          required
          maxLength={20}
          onChange={(e) => handleChange(e, "firstName")}
          value={firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          className={`form-control ${setHighlightClass(
            "lastName",
            props,
            fieldRefs
          )}`}
          type="text"
          ref={fieldRefs.lastNameRef}
          required
          value={lastName}
          maxLength={20}
          onChange={(e) => handleChange(e, "lastName")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          className={`form-control ${setHighlightClass(
            "email",
            props,
            fieldRefs
          )}`}
          type="email"
          ref={fieldRefs.emailRef}
          required
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
    </>
  );
}

export default UserForm;
