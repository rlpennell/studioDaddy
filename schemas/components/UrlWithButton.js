import React from 'react';
import { Card, TextInput, Button } from '@sanity/ui';
import { FormField } from '@sanity/base/components';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import { useId } from '@reach/auto-id';
import { withDocument } from 'part:@sanity/form-builder';
import { studioClient } from '../../lib/utils/studioClient';

const UrlWithButton = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events,
    document,
  } = props;

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    event => {
      const inputValue = event.currentTarget.value; // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  //Fetches the URL specfied then uses the JS client to write to the current document
  const handleClick = async () => {
    const res = await fetch(value).then(res => res.json());
    studioClient
      .patch(document._id)
      .set({
        fetchObject: {
          ...document.fetchObject,
          fieldToWrite: res.data[3].breed,
        },
      })
      .commit();
  };

  const inputId = useId();

  return (
    <FormField
      description={type.description} // Creates description from schema
      title={type.title} // Creates label from schema title
      __unstable_markers={markers} // Handles all markers including validation
      __unstable_presence={presence} // Handles presence avatars
      compareValue={compareValue} // Handles "edited" status
      inputId={inputId} // Allows the label to connect to the input field
    >
      <Card padding={2}>
        <TextInput
          id={inputId} // A unique ID for this input
          fontSize={2}
          padding={3}
          space={[3, 3, 4]}
          value={value} // Current field value
          readOnly={readOnly} // If "readOnly" is defined make this field read only
          onFocus={onFocus} // Handles focus events
          onBlur={onBlur} // Handles blur events
          ref={ref}
          onChange={handleChange} // A function to call when the input value changes
        />
      </Card>
      <Card padding={2}>
        <Button
          fontSize={2}
          padding={3}
          text='Fetch'
          tone='primary'
          onClick={handleClick}
        />
      </Card>
    </FormField>
  );
});

export default withDocument(UrlWithButton);
