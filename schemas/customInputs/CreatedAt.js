import React from 'react'
import {withDocument} from 'part:@sanity/form-builder'

const CreatedAt = props => (
      <p>
        Created at {props.document._createdAt}
      </p>
    )

export default withDocument(CreatedAt)