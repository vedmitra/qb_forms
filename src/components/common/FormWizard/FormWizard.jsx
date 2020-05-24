import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import DynamicComponent from "../DynamicComponent/DynamicComponent";
import User from "../../../models/User";
import Claim from "../../../models/Claim";
import { isFormValid } from "../../../utils/utility";

/**
 * Form Wizard to control multiple child components
 * All the functionality required to maintain forms is handled in this component
 * Automatically handles next, prev and submit display and theit corresponding actions
 * This component dunamically creates and destroys the child forms based on current state
 * This component expects the steps in its props
 * Eg: If the form wizard is 3 step process, props should contain a json dertailing the steps like below
 * {
  1: {
    title: "Basic Info",
    component: "UserForm",
    data:"user"
  },
  2: {
    title: "Claim Details",
    component: "ClaimForm",
    data:"claimDetails"
  },
  3: {
    title: "Confirmation",
    component: "SubmissionForm",
  },
}
 */
function FormWizard(props) {
  // Component state variables
  const [currentStep, setCurrentStep] = useState(1);
  const [activeForm, setActiveForm] = useState(props.wizardSteps[1]);
  const [highlightForm, setHighlightForm] = useState(false);
  const [formState, setFormState] = useState(props.initialState);
  const [updateChildState, setUpdateChildState] = useState(false);
  // Form wizard ref used in validating the form.
  let formWizardRef = useRef();
  const totalSteps = Object.keys(props.wizardSteps).length;

  const onNext = (e) => {
    let formValid = isFormValid(formWizardRef);
    setHighlightForm(false);
    if (formValid) {
      let tempStep = currentStep;
      setCurrentStep(currentStep + 1);
      setActiveForm(props.wizardSteps[tempStep + 1]);
    } else {
      setHighlightForm(true);
    }
  };

  const onPrev = () => {
    let tempStep = currentStep;
    setHighlightForm(false);
    setCurrentStep(currentStep - 1);
    setActiveForm(props.wizardSteps[tempStep - 1]);
  };

  const handleChildFormChange = (childProps, changeEvent) => {
    setFormState(setPartialState(childProps, changeEvent));
  };
  // To set the state after modifications in active child components
  const setPartialState = (childProps, changeEvent) => {
    let tempState = Object.assign({}, formState);
    let fieldName = changeEvent.target.name;
    tempState[activeForm.data] = Object.assign({}, childProps);
    tempState[activeForm.data][fieldName] = changeEvent.target.value;
    return tempState;
  };

  const submitClaimForm = (e) => {
    e.preventDefault();
    let formValid = isFormValid(formWizardRef);
    if (formValid) {
      alert("Form Submitted");
    } else {
      setHighlightForm(true);
    }
  };

  return (
    <div className="d-flex p2 justify-content-center">
      <div style={{ width: "80%" }}>
        <div className="card" style={{ padding: "20px" }}>
          <div className="card-body">
            <h5 className="card-title text-center">
              <span
                className="rounded-circle border border-primary"
                style={{ padding: "0 10px", marginRight: "10px" }}
              >
                {currentStep}
              </span>
              {props.wizardSteps[currentStep].title}
            </h5>
            <form
              name="claimWizard"
              ref={formWizardRef}
              onSubmit={(e) => submitClaimForm(e)}
            >
              <DynamicComponent
                componentName={activeForm.component}
                componentData={{
                  ...formState[activeForm.data],
                }}
                handleChange={(childProps, changeEvent) =>
                  handleChildFormChange(childProps, changeEvent)
                }
                updateState={updateChildState}
                liftState={(newState) =>
                  setFormState({ ...formState, [activeForm.data]: newState })
                }
                highlightForm={highlightForm}
              />
            </form>
            {currentStep > 1 && (
              <button
                className="btn btn-secondary float-left"
                onClick={() => onPrev()}
              >
                Prev
              </button>
            )}
            {currentStep < totalSteps - 1 && (
              <button
                className="btn btn-secondary float-right"
                onClick={(e) => onNext(e)}
              >
                Next
              </button>
            )}
            {currentStep === totalSteps - 1 && (
              <button
                className="btn btn-primary float-right"
                onClick={(e) => submitClaimForm(e)}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

FormWizard.prototype = {
  wizardSteps: PropTypes.object.isRequired,
  initialState: PropTypes.object.isRequired,
};

export default FormWizard;
