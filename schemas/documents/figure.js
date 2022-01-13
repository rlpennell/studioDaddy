export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ],
  options: {
    hotspot: true
  }
}