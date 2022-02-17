import React from 'react'
import { withDocument } from 'part:@sanity/form-builder'
import Preview from 'part:@sanity/base/preview'

const PreviewComponent = ({ document, value }) => {
  const { slides } = document
  const { _key, alt, caption, asset } = value

  const index = slides.findIndex(slide => slide._key == _key)

  return (
    <Preview type='image' value={{
      title: `${index} - ${caption}`,
      subtitle: alt,
      media: asset
    }} />
  )
}

export default withDocument(PreviewComponent)