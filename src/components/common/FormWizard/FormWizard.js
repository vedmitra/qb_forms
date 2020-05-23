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
  },
  2: {
    title: "Claim Details",
    component: "ClaimForm",
  },
  3: {
    title: "Confirmation",
    component: "SubmissionForm",
  },
}
When any new step is added to the wizard in future, below steps need to be followed
1. In componentMap variable, add the form name (Component name) and the corresponding data model name
  Eg: UserForm:"userForm"
2. set the initial state of new form. To do this, update useState hook with new form related model
key in below example should correspond to model name in step 1
Eg: useState({
    userForm: new User(),
    claimForm: new Claim(),
    newForm: new newData()
  })
3. Update getPartialState method to return new form component state
Eg: case "NewForm":
        return { ...formState["newForm"] }; // key in formState should correspond to model name in step 1
 */
function FormWizard(props) {
  // Map component name to the data model name.
  //When adding new steps to the form, add the new component name and the corresponding model name
  const componentDataMap = {
    UserForm: "userForm",
    ClaimForm: "claimForm",
  };

  // Component state variables
  const [currentStep, setCurrentStep] = useState(1);
  const [activeFormName, setActiveFormName] = useState(
    props.wizardSteps[1].component
  );
  const [highlightForm, setHighlightForm] = useState(false);
  const [formState, setFormState] = useState({
    userForm: new User(),
    claimForm: new Claim(),
  });
  // Form wizard ref used in validating the form.
  let formWizardRef = useRef();
  const totalSteps = Object.keys(props.wizardSteps).length;

  const onNext = (e) => {
    let formValid = isFormValid(formWizardRef);
    setHighlightForm(false);
    if (formValid) {
      let tempStep = currentStep;
      setCurrentStep(currentStep + 1);
      setActiveFormName(props.wizardSteps[tempStep + 1].component);
    } else {
      setHighlightForm(true);
    }
  };

  const onPrev = () => {
    let tempStep = currentStep;
    setHighlightForm(false);
    setCurrentStep(currentStep - 1);
    setActiveFormName(props.wizardSteps[tempStep - 1].component);
  };

  const handleChildFormChange = (childProps, changeEvent) => {
    setFormState(setPartialState(childProps, changeEvent));
  };
  // To set the state after modifications in active child components
  const setPartialState = (childProps, changeEvent) => {
    let tempState = Object.assign({}, formState);
    let fieldName = changeEvent.target.name;
    tempState[componentDataMap[activeFormName]] = Object.assign({}, childProps);
    tempState[componentDataMap[activeFormName]][fieldName] =
      changeEvent.target.value;
    return tempState;
  };
  // For getting active child component state
  const getPartialState = (activeComponent) => {
    switch (activeComponent) {
      case "UserForm":
        return { ...formState["userForm"] };
      case "ClaimForm":
        return { ...formState["claimForm"] };
      default:
        return {};
    }
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
                componentName={activeFormName}
                componentData={getPartialState(activeFormName)}
                handleChange={(childProps, changeEvent) =>
                  handleChildFormChange(childProps, changeEvent)
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
};

export default FormWizard;
