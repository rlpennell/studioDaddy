import React from 'react';
import { Card, Text } from '@sanity/ui';
import { withDocument } from 'part:@sanity/form-builder';

const CreatedAt = React.forwardRef((props) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
    document,
  } = props;

  return (
    <Card padding={[3, 3, 4]} radius={2} shadow={1} tone='positive'>
      <Text align='center' size={[2, 2, 3]}>
        Created at {document._createdAt}
      </Text>
    </Card>
  );
});

export default withDocument(CreatedAt);
