import React, { useState, useEffect } from 'react'
import { Card, Stack, Select } from '@sanity/ui'
import { FormField } from '@sanity/base/components'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import { useId } from "@reach/auto-id" 

const AsyncSelect = React.forwardRef((props, ref) => {
  const [listItems, setListItems] = useState([])

  const { 
    type,         // Schema information
    value,        // Current field value
    readOnly,     // Boolean if field is not editable
    markers,      // Markers including validation rules
    presence,     // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus,      // Method to handle focus state
    onBlur,       // Method to handle blur state  
    onChange,      // Method to handle patch events,
  } = props

  //Destructure your URL and handler from options
  const {
    url,
    handler,
  } = type.options

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = event.currentTarget.value // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange]
  )

  const inputId = useId()

  useEffect(() => {
    const getItems = async () => {
      const items = await fetch(url)
      .then(res => res.json())
      .then(json => handler(json))

      setListItems(items)
    }

    getItems()
  }, [])

  console.log(parent)

	return (
    <FormField
      description={type.description}  // Creates description from schema
      title={type.title}              // Creates label from schema title
      __unstable_markers={markers}    // Handles all markers including validation
      __unstable_presence={presence}  // Handles presence avatars
      compareValue={compareValue}     // Handles "edited" status
      inputId={inputId}               // Allows the label to connect to the input field
    >
      <Card padding={0}>
        <Stack>
          <Select
            id={inputId}                  // A unique ID for this input
            fontSize={2}
            padding={[3, 3, 4]}
            space={[3, 3, 4]}
            value={value}                 // Current field value
            readOnly={readOnly}           // If "readOnly" is defined make this field read only
            onFocus={onFocus}             // Handles focus events
            onBlur={onBlur}               // Handles blur events
            ref={ref}
            onChange={handleChange}       // A function to call when the input value changes
          >
            <option value={'---'}>---</option>
            {listItems.map(({ value, title }) => (
              <option 
                key={value} 
                value={value}
              >
                {title}
              </option>
            ))}
          </Select>
        </Stack>
      </Card>
    </FormField>
	)
})

export default AsyncSelect