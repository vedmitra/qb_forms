import React, { createRef, Component } from "react";
import { setHighlightClass } from "../../utils/utility";

/**
 * Component to fill in user details
 */
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.componentData || {
      firstName: "",
      lastName: "",
      email: "",
    };
  }
  fieldRefs = {
    firstNameRef: createRef(null),
    lastNameRef: createRef(null),
    emailRef: createRef(null),
  };
  handleChange(e, fieldName) {
    setHighlightClass(fieldName, { highlightForm: true }, this.fieldRefs);
    this.setState({
      [fieldName]: e.target.value,
    });
    if (this.props.liftState) {
      this.props.liftState(this.state);
    }
  }
  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            className={`form-control ${setHighlightClass(
              "firstName",
              this.props,
              this.fieldRefs
            )}`}
            type="text"
            ref={this.fieldRefs.firstNameRef}
            required
            maxLength={20}
            onChange={(e) => this.handleChange(e, "firstName")}
            value={this.state.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            className={`form-control ${setHighlightClass(
              "lastName",
              this.props,
              this.fieldRefs
            )}`}
            type="text"
            ref={this.fieldRefs.lastNameRef}
            required
            value={this.state.lastName}
            maxLength={20}
            onChange={(e) => this.handleChange(e, "lastName")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            className={`form-control ${setHighlightClass(
              "email",
              this.props,
              this.fieldRefs
            )}`}
            type="email"
            ref={this.fieldRefs.emailRef}
            required
            value={this.state.email}
            onChange={(e) => this.handleChange(e, "email")}
          />
        </div>
      </>
    );
  }
}

export default UserForm;
