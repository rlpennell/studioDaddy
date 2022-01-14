import React from "react"
import { Card, Flex, TextInput, Text } from '@sanity/ui'
import { FormField } from '@sanity/base/components'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import { useId } from "@reach/auto-id" 

const PathInput = React.forwardRef((props, ref) => {
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
    parent
  } = props

  const { baseUrl, customFormat } = type.options

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = customFormat(event.currentTarget.value) // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange]
  )

  const inputId = useId()

  return (
    <FormField
      description={type.description}  // Creates description from schema
      title={type.title}              // Creates label from schema title
      __unstable_markers={markers}    // Handles all markers including validation
      __unstable_presence={presence}  // Handles presence avatars
      compareValue={compareValue}     // Handles "edited" status
      inputId={inputId}               // Allows the label to connect to the input field
    >
      <Flex
        direction='row'
        padding={[2, 0]}
        align='stretch'
      >
        <Card 
          padding={3}
          border={true}
          borderRight={false}
          style={{
            backgroundColor:'#f2f3f5'
          }}
        >
          <Text size={2}>
            {baseUrl}
          </Text>
        </Card>
        <Card 
          flex={1}
          border={true}
        >
          <TextInput
            id={inputId}
            readOnly={readOnly}           // If "readOnly" is defined make this field read only
            onFocus={onFocus}             // Handles focus events
            onBlur={onBlur}               // Handles blur events
            ref={ref}
            fontSize={2}
            onChange={handleChange}
            padding={3}
            border={false}
            value={value}
          />  
        </Card>
      </Flex>
    </FormField>
	)
})

export default PathInput