import { createElement } from "react";
import PropTypes from "prop-types";
import UserForm from "../../claimForms/UserForm";
import ClaimForm from "../../claimForms/ClaimForm";
import SubmitFeedback from "../../claimForms/SubmitFeedback";

const components = {
  UserForm,
  ClaimForm,
  SubmitFeedback,
};
function DynamicComponent(props) {
  return createElement(components[props.dynamicProps.componentName], {
    componentData: props.dynamicProps.componentData,
    handleChange: props.dynamicProps.handleChange,
    highlightForm: props.dynamicProps.highlightForm,
    updateState: props.dynamicProps.updateState,
    liftState: props.dynamicProps.liftState,
    submitStatus: props.dynamicProps.submitStatus,
  });
}

DynamicComponent.prototype = {
  dynamicProps: PropTypes.object.isRequired,
};

export default DynamicComponent;
