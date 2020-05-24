import { createElement } from "react";
import PropTypes from "prop-types";
import UserForm from "../../claims/UserForm";
import ClaimForm from "../../claims/ClaimForm";

const components = {
  UserForm,
  ClaimForm,
};
function DynamicComponent(props) {
  return createElement(components[props.componentName], {
    componentData: props.componentData,
    handleChange: props.handleChange,
    highlightForm: props.highlightForm,
    updateState: props.updateState,
    liftState: props.liftState,
  });
}

DynamicComponent.prototype = {
  componentName: PropTypes.string.isRequired,
  componentData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  highlightForm: PropTypes.bool.isRequired,
  updateState: PropTypes.bool.isRequired,
  liftState: PropTypes.func.isRequired,
};

export default DynamicComponent;
