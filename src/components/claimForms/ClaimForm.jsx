import React, { useRef, Component, createRef } from "react";
import moment from "moment";
import { setHighlightClass } from "../../utils/utility";

class ClaimForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.componentData || {
      policyNumber: "",
      eventDate: "",
      description: "",
    };
  }
  fieldRefs = {
    policyNumberRef: createRef(null),
    eventDateRef: createRef(null),
    descriptionRef: createRef(null),
  };
  handleChange(e, fieldName) {
    setHighlightClass(fieldName, { highlightForm: true }, this.fieldRefs);
    this.setState({
      [fieldName]: e.target.value,
    });
    this.props.liftState(this.state);
  }
  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="policyNumber">Policy Number</label>
          <input
            name="policyNumber"
            className={`form-control ${setHighlightClass(
              "policyNumber",
              this.props,
              this.fieldRefs
            )}`}
            type="number"
            ref={this.fieldRefs.policyNumberRef}
            required
            maxLength={20}
            onChange={(e) => this.handleChange(e, "policyNumber")}
            value={this.state.policyNumber}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input
            name="eventDate"
            className={`form-control ${setHighlightClass(
              "eventDate",
              this.props,
              this.fieldRefs
            )}`}
            type="date"
            ref={this.fieldRefs.eventDateRef}
            required
            max={moment().format("YYYY-MM-DD")}
            onChange={(e) => this.handleChange(e, "eventDate")}
            value={this.state.eventDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className={`form-control ${setHighlightClass(
              "description",
              this.props,
              this.fieldRefs
            )}`}
            ref={this.fieldRefs.descriptionRef}
            required
            minLength={20}
            onChange={(e) => this.handleChange(e, "description")}
            value={this.state.description}
          />
        </div>
      </>
    );
  }
}

export default ClaimForm;
