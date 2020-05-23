export const setHighlightClass = (fieldName, props, fieldRefs) => {
  let refName = `${fieldName}Ref`;
  return props.highlightForm
    ? fieldRefs[refName].current && fieldRefs[refName].current.validity.valid
      ? "is-valid"
      : "is-invalid"
    : "";
};
// Generic utility method to validate form
export const isFormValid = (formRef) => {
  let isValid = false;
  for (let i = 0; i < formRef.current.elements.length; i++) {
    let ele = formRef.current.elements[i];
    isValid = ele.validity.valid;
    if (!isValid) {
      return isValid;
    }
  }
  return isValid;
};
