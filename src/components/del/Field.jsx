// Import memo and useCallback hooks:
import { memo, useCallback } from 'react';

// Create the Field component:
export const Field = memo((props) => {
  // Create handler for change event:
  const onFieldChange = useCallback(
    (event) => {
      props.onFieldChange(props.fieldName, event.target.value);
    },
    [props.onFieldChange, props.fieldName]
  );

  // Render all HTML components:
  return (
    <fieldset>
      <label htmlFor={props.fieldName}>{props.labelText}</label>

      <input
        type={props.fieldType}
        name={props.fieldName}
        id={props.fieldName}
        onChange={onFieldChange}
        value={props.fieldValue}
      />

      {props.hasError && (
        <p>{`Please fill in correct value for "${props.labelText}".`}</p>
      )}
    </fieldset>
  );
});
