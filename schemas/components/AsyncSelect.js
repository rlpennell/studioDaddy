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

	return (
    <></>

	)
})

export default AsyncSelect